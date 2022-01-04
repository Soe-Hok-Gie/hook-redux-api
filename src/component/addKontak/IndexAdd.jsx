import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { addKontak, getListKontak, updateKontak } from '../../action/KontakAction';



const Container = styled.div`
  
`;
const Title = styled.h4`
  margin-bottom: 5px;
`;
const Form = styled.form`
`;
const Input = styled.input`
  background-color: #eccfaa;
  border-radius: 10px;
`;
const Button = styled.button`
    border-radius: 10px;
    background-color: crimson;
`;


const IndexAdd = () => {
  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");
  const [id, setId] = useState("");


  const { addKontakResult, detailKontakResult,updateKontakResult } = useSelector((state) => state.KontakReducer)
  const dispatch = useDispatch();

  // jika ada logika atau keperluan yg panjang pakek cara pertama
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
    console.log("1. masuk hendlesubmit")
    if (id) {
      //update kontak
      dispatch(updateKontak({ id: id, nama: nama, nohp: nohp }))

    } else {
      //add kontak
      dispatch(addKontak({ nama: nama, nohp: nohp }))
    }
  }

  useEffect(() => {
    if (addKontakResult) {
      // console.log ('5. masuk component Did update')
      dispatch(getListKontak());
      setNama('');
      setNohp('');
    }
  }, [addKontakResult, dispatch])

  useEffect(() => {
    if (detailKontakResult) {
      //   console.log ('5. masuk component Did update')
      dispatch(getListKontak());
      setNama(detailKontakResult.nama);
      setNohp(detailKontakResult.nohp);
      setId(detailKontakResult.id);
    }
  }, [detailKontakResult, dispatch])

  useEffect(() => {
    if (updateKontakResult) {
      console.log ('5. masuk component Did update',updateKontakResult)
      dispatch(getListKontak());
      setNama('');
      setNohp('');
      setId('');
    }
  }, [updateKontakResult, dispatch])

  return (
    <Container>
      {/* <Title>Add Kontak</Title>
            <Form onSubmit={handleSubmit}>
                <Input type="text" name="nama" placeholder="Nama"  value={nama} onChange={onChangeNama}/>
                <Input type="number" name="nohp" placeholder="No Hp" value={nohp} onChange={onChangeNohp}/>
                <Button type="submit">Submit</Button>
            </Form> */}

      <Title> {id ? "edit Kontak" : "Add Kontak"}</Title>
      {/* //cara ke 2 apabila tidak ada logika yg panjang */}
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Input type="text" name="nama" placeholder="Nama" value={nama} onChange={(e) => setNama(e.target.value)} />
        <Input type="number" name="nohp" placeholder="No Hp" value={nohp} onChange={(e) => setNohp(e.target.value)} />
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  )
}

export default IndexAdd
