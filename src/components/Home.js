import React, { useEffect, useState } from 'react';
import { Tabs, Button, Spin } from 'antd';
import { GEO_OPTIONS, POS_KEY, API_ROOT, AUTH_HEADER, TOKEN_KEY } from '../constants'
const { TabPane } = Tabs;

const Home = () => {
    const [isLoadingGeoLocation, setIsLoadingGeoLocation] = useState(false);
    const [isLoadingPosts, setIsLoadingPosts] = useState(false),
    const [error, setError] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setIsLoadingGeoLocation(true);
        setError('');
        if ("geoloctaion" in navigator) {
            navigator.geolocation.getCurrentPosition(
                onSuccessLoadGeoLocation,
                onFailedLoadGeoLocation,
                GEO_OPTIONS
            );
        } else {
            setError('Geolocation is not supported.');
        }
    })

    const onSuccessLoadGeoLocation = (position) => {
        console.log(position);
        const { latitude, longitude } = position.coords;
        localStorage.setItem(POS_KEY, JSON.stringify({ lat: latitude, lon: longitude }));
        setIsLoadingGeoLocation(false);
        setError('');
        this.loadNearbyPosts();
    }
 
    const onFailedLoadGeoLocation = () => {
        setIsLoadingGeoLocation(false);
        setError('Failed to load geo location.');
    }
 
    const loadNearbyPosts = () => {
        const { lat, lon } = JSON.parse(localStorage.getItem(POS_KEY));
        const token = localStorage.getItem(TOKEN_KEY);
        this.setState({ isLoadingPosts: true, error: '' });
        fetch(`${API_ROOT}/search?lat=${lat}&lon=${lon}&range=20000`, {
            method: 'GET',
            headers: {
                Authorization: `${AUTH_HEADER} ${token}`
            }
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Failed to load post.');
            })
            .then((data) => {
                console.log(data);
                this.setState({ posts: data ? data : [], isLoadingPosts: false });
            })
            .catch((e) => {
                console.error(e);
                this.setState({ isLoadingPosts: false, error: e.message });
            });
    }
 
    return (
        <div>
            This is Home
        </div>
    );
}

export default Home;
