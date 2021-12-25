import React , { useEffect }from 'react'
import styled from 'styled-components'
import { getListKontak } from '../../action/KontakAction';
import {useDispatch} from 'react-redux'


const Container = styled.div``;
const Title = styled.h4``;


const IndexKontak = () => {

    const dispatch = useDispatch()


    useEffect(() => {

    //panggil action getListcontak
    console.log("1. useEffect component DId Mount")
    dispatch(getListKontak()); 


     },[dispatch])

    return (
        <Container>
            <Title>
                list kontak
            </Title>
        </Container>
    )
}

export default IndexKontak
