import { memo, FC, useEffect, useReducer, useState } from "react";
import styled from 'styled-components';
import { fetchPosts } from "../../apis/posts";

// reducers
import {
    initialState,
    practice_postsActionTyps,
    practice_postsReducer,
} from '../../reducers/practice_posts';

export const PracticePosts: FC = memo(() => {
    return <p>練習一覧</p>;
});

