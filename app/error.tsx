'use client'
import React from 'react';

const ErrorPage: React.FC = (props : any) => {
    // const errorCode = Math.floor(Math.random() * 1000) + 400;
console.log(props, "<------------this is error page props------------->")
    return (
        <div>
            <h1>Error {props?.error.message}</h1>
            <p>Oops! Something went wrong.</p>
            <p>Please try again later.</p>
        </div>
    );
};

export default ErrorPage;