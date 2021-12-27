import React from 'react'
import styled from 'styled-components'

const Container = styled.div``;
const Title = styled.h4``;
const Form = styled.form``;
const Input = styled.input``;



const IndexAdd = () => {
    return (
        <Container>
            <Title>Add Kontak</Title>
            <Form>
                <Input type="text" name="nama" placeholder="Nama"/>
                <Input type="number" name="nohp" placeholder="No Hp"/>
            </Form>
        </Container>
    )
}

export default IndexAdd
