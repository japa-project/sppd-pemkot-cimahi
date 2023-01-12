import { Layout } from "Components";
import { Auth, Dashboard, Harian, Kegiatan, Pegawai, Penginapan, RapatLuarKantor, Representasi, SewaKendaraan } from "Pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectRoute } from "./ProtectRoute";

export const RootRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<ProtectRoute><Dashboard /></ProtectRoute>} />
                    <Route path="/pemkot-cimahi/pegawai" element={<ProtectRoute><Pegawai /></ProtectRoute>} />
                    <Route path="/pemkot-cimahi/biaya/harian" element={<ProtectRoute><Harian /></ProtectRoute>} />
                    <Route path="/pemkot-cimahi/biaya/representasi" element={<ProtectRoute><Representasi /></ProtectRoute>} />
                    <Route path="/pemkot-cimahi/biaya/penginapan" element={<ProtectRoute><Penginapan /></ProtectRoute>} />
                    <Route path="/pemkot-cimahi/biaya/rapat-luar-kantor" element={<ProtectRoute><RapatLuarKantor /></ProtectRoute>} />
                    <Route path="/pemkot-cimahi/biaya/sewa-kendaraan" element={<ProtectRoute><SewaKendaraan /></ProtectRoute>} />
                    <Route path="/pemkot-cimahi/kegiatan" element={<ProtectRoute><Kegiatan /></ProtectRoute>} />
                </Route>
                <Route path="/login" element={<Auth />} />
            </Routes>
        </BrowserRouter>
    )
}
