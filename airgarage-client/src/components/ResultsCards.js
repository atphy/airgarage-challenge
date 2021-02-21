import React from "react";

export const ResultsCards = (props) => {

    //score = ( number of reviews * rating ) / (number of reviews + 1)

    const score = () => {
        return ((props.result.review_count * props.result.rating) / (props.result.review_count + 1))
    }

    return <>
        <div>
        <h1>{props.result.name}</h1>
        <img src={props.result.image_url} />
        <p>{props.result.location.address1}</p>
        <p>{props.result.location.address2}</p>
        <p>{props.result.location.address3}</p>
        <p>{props.result.location.city}, {props.result.location.state} {props.result.location.zip_code}</p>
        <p>{props.result.rating}</p>
        <p>{props.result.review_count} total reviews</p>
        <a href={props.result.url}>Yelp Page</a>
        <p>{score()}</p>
        </div>
    </>;
};