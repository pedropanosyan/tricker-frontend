import { useState, useRef } from 'react';
import {useAppDispatch} from "../store/store";
import {resetTimer, startTimer, stopTimer, tick} from "../store/features/timerSlice";

export function useTimer() {

    const countRef = useRef<NodeJS.Timeout | null>(null);
    const dispatch = useAppDispatch();

    const startTime = () => {
        countRef.current = setInterval(() => {
            dispatch(tick());
        }, 1000);
    };

    const stopTime = () => {
        clearInterval(countRef.current!);
    };

    const resetTime = () => {
        clearInterval(countRef.current!);
    }

    return {
        startTime,
        stopTime,
        resetTime,
    };
}