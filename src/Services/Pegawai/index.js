import { Axios } from "Configs/Axios";

export const GetAllPegawai = ({page = 1, perpage = 10}) => Axios.get(`/pegawai?page=${page}&limit=${perpage}`);
export const AddPegawai = (payload) => Axios.post('/pegawai', payload);