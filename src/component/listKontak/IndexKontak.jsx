import React, { useEffect } from 'react'
import styled from 'styled-components'
import { getListKontak } from '../../action/KontakAction';
import { useDispatch, useSelector } from 'react-redux'


const Container = styled.div``;
const Title = styled.h4``;


const IndexKontak = () => {

    const { getListKontakResult, getListKontakLoading, getListKontakError } = useSelector(state => state.KontakReducer)
    const dispatch = useDispatch()


    useEffect(() => {

        //panggil action getListcontak
        // console.log("1. useEffect component DId Mount")
        dispatch(getListKontak());


    }, [dispatch])

    return (
        <Container>
            <Title>list kontak </Title>
            {getListKontakResult ? (
                getListKontakResult.map((kontak) => {
                    return (
                        <p key={kontak.id}> {kontak.nama}-{kontak.nohp}</p>
                    )
                })
            ) : getListKontakLoading ? (
                <p>Loading ...</p>
            ) : (
                <p> {getListKontakError ? getListKontakError : "data kosong "}</p>
            )}
        </Container>
    )
}

export default IndexKontak
