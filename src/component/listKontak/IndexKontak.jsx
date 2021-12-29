import React, { useEffect } from 'react'
import styled from 'styled-components'
import { getListKontak, deleteKontak, detailKontak } from '../../action/KontakAction';
import { useDispatch, useSelector } from 'react-redux'


const Container = styled.div``;
const Title = styled.h4``;
const Button = styled.button``;


const IndexKontak = () => {

    const { getListKontakResult, getListKontakLoading, getListKontakError,deleteKontakResult} = useSelector(state => state.KontakReducer)
    const dispatch = useDispatch()


    useEffect(() => {

        //panggil action getListcontak
        // console.log("1. useEffect component DId Mount")
        dispatch(getListKontak());
    }, [dispatch])

    useEffect(() => {
        if (deleteKontakResult) {
          console.log ('5. masuk component Did update')
          dispatch (getListKontak ()); 
        }
      }, [deleteKontakResult,dispatch])

    return (
        <Container>
            <Title>list kontak </Title>
            {getListKontakResult ? (
                getListKontakResult.map((kontak) => {
                    return (
                        <p key={kontak.id}> {kontak.nama}-{kontak.nohp}
                            <Button onClick={() => dispatch(deleteKontak(kontak.id))}>delete</Button>
                            <Button onClick={() => dispatch(detailKontak(kontak))}>edit</Button>
                        </p>
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
