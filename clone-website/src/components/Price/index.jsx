import CardPrice from "../../containers/organism/CardPrice";
import Grids from "../Grid";
import TitlePricing from "../../containers/organism/TitlePricing";

const Price = () => {
    return ( 
        <>
            <div className="pricing py-3 my-3 mt-5" style={{ backgroundColor: "#eeeee4" }}>
                <TitlePricing title="Pricing" description="Pilih sistem pembayaran yang kamu sukai"/>
                <Grids containerType="container" display="d-flex" flexDirection="flex-row" justify="justify-content-center">
                    <Grids row="row">
                        <Grids gridColumns="col-md" display="d-flex" justify="justify-content-between">
                            <CardPrice head="Free" body="Kami menyediakan banyak kelas gratis, kamu bisa memilih kelas gratis yang ingin kamu pelajari" startFrom="Mulai dari" price="Rp. 0,-"/>
                            <CardPrice head="Free" body="Kami menyediakan banyak kelas gratis, kamu bisa memilih kelas gratis yang ingin kamu pelajari" startFrom="Mulai dari" price="Rp. 0,-"/>
                            <CardPrice head="Free" body="Kami menyediakan banyak kelas gratis, kamu bisa memilih kelas gratis yang ingin kamu pelajari" startFrom="Mulai dari" price="Rp. 0,-"/>
                        </Grids>
                    </Grids>
                 </Grids>          
            </div>
        </>
     );
}
export default Price;