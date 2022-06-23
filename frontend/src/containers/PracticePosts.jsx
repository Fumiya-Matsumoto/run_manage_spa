import React, { Fragment, useEffect } from 'react';

import { fetchPosts } from '../apis/posts';

export const PracticePosts = () => {

    useEffect(() => {
        fetchPosts()
        .then((data) =>
            console.log(data)
        )
        }, [])

    return (
    <Fragment>
        練習一覧
    </Fragment>
    )
}
