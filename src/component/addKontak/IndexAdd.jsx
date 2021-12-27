import React , { useState }from 'react'
import styled from 'styled-components'

const Container = styled.div``;
const Title = styled.h4``;
const Form = styled.form``;
const Input = styled.input``;
const Button = styled.button``;


const IndexAdd = () => {
    const [nama, setNama] = useState("");
    const [nohp, setNohp] = useState("");

    // const onChangeNama = (e) => {
    //     const nama= e.target.value;
    //     setNama(nama);
    // };
    // const onChangeNohp = (e) => {
    //     const nohp= e.target.value;
    //     setNohp(nohp);
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
     }
    return (
        <Container>
            {/* <Title>Add Kontak</Title>
            <Form onSubmit={handleSubmit}>
                <Input type="text" name="nama" placeholder="Nama" onChange={onChangeNama}/>
                <Input type="number" name="nohp" placeholder="No Hp"onChange={onChangeNohp}/>
                <Button type="submit">Submit</Button>
            </Form> */}
             <Title>Add Kontak</Title>
            <Form onSubmit={(e) => handleSubmit (e)}>
                <Input type="text" name="nama" placeholder="Nama" value={nama} onChange={(e) =>setNama(e.target.value)}/>
                <Input type="number" name="nohp" placeholder="No Hp" value={nohp} onChange={(e) =>setNohp(e.target.value)}/>
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default IndexAdd
