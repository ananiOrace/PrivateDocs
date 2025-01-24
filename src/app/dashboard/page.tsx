import Stats from "../components/dashboard/stats";
import Table from "../components/dashboard/tables";

import { statsData, organizationsData, orgHeader } from "../constants";
import '../style.css'

export default function HomePage () {
    return(
        <div className="w-100 mt-4 px-4">
            
            <Stats datas={statsData} />

            <div className="py-4">
                <p className="fw-bold fs-5">Dernières organisations actives</p>
            </div>

            {/* table */}
            <Table 
                headers={orgHeader} 
                data={organizationsData}
                actions={{ edit: false, delete: true }}
                dataType="organisation"
            />

        </div>
    )
}