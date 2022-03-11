import BenifitFeature from "../../modules/home/organism/BenifitFeature";
import Grids from "../Grid";
import TitleBenifit from "../../containers/organism/TitleBenifit";
import { FaClock, FaUsers, FaCertificate, FaVideo, FaList } from 'react-icons/fa';
import { FcTodoList } from "react-icons/fc";
import { MdSecurity } from "react-icons/md";
import { RiPriceTagFill } from "react-icons/ri";



const Benifits = () => {
    return (
        <div className="container-fluid" style={{ backgroundColor: "#eeeee4" }}>
            <div className="row">
                <TitleBenifit gridColumn="col-md-6" display="d-flex" flexDirection="flex-column" justify="justify-content-center" title=
                    "Keuntungan yang Akan Kamu Dapatkan" paragraph="Apa sih keuntungan belajar di layanan daridasar.com ?" />
                <Grids gridColumns="col-md">
                    <div className="row mt-2 py-4">
                        <Grids gridColumns="col-md" children={<BenifitFeature icon={<FaClock />} title="Waktu/" paragraph="Kamu bebas menentukan waktu belajar kapan saja" />} />
                        <Grids gridColumns="col-md" children={<BenifitFeature icon={<FaUsers />} title="Trainer" paragraph="Belajar bersama praktisi dibidangnya" />} />
                        <Grids gridColumns="col-md" children={<BenifitFeature icon={<FaCertificate />} title="Certificate" paragraph="Dapatkan sertifikat setelah selesai belajar" />} />

                    </div>
                    <div className="row">
                        <Grids gridColumns="col-md" children={<BenifitFeature icon={<FaVideo />} title="Video" paragraph="Belajar menggunakan video dengan kualitas HD" />
                        } />
                        <Grids gridColumns="col-md" children={<BenifitFeature icon={<FcTodoList />} title="Case Studi" paragraph="Belajar dengan studi kasus" />
                        } />
                        <Grids gridColumns="col-md" children={<BenifitFeature icon={<FaList />} title="Dari Dasar" paragraph="Materi belajar dimulai dari dasar." />} />
                    </div>
                    <div className="row">
                        <Grids gridColumns="col-md" children={<BenifitFeature icon={<MdSecurity />} title="Guarantee" paragraph="Garansi uang kembali jika dalam 7 hari merasa kelas nya tidak cocok" />} />
                        <Grids gridColumns="col-md" children={<BenifitFeature icon={<RiPriceTagFill />} title="Pricing" paragraph="Kamu bebas memilih untuk sekali bayar atau dengan berlangganan" />} />
                    </div>
                </Grids>
            </div>
        </div>
    );
}

export default Benifits;