import axios from "axios";

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2M4Yjk0NWIyZjdhZWQwYjI0ODVkNjAzOTc4ZTdjNyIsInN1YiI6IjVmZjFmYzQwMWQzNTYzMDA0MTBkMDQ5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H29TchIvAeG1C8qEuTmjMGWGnv4CZ3NCX5RSVRDqqhE';

const apiTMDB = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {"Authorization": `Bearer ${token}`}
});

export default apiTMDB;