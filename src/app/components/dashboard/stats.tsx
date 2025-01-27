import Image from "next/image"
import { statsType } from "@/app/types"

export default function Stats({ datas }: { datas: statsType[]}) {
    return(
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 gap-lg-0 gap-md-0 gap-sm-3">
                {/* stats */}
                    {datas.map(({ id, title, value, icon,}) => (
                        <div key={id} className="col pb-md-2">
                            <div key={id} className="d-flex align-items-center rounded-xl border-primary border-2 p-4 gap-3"
                            >
                                <div className="d-flex align-items-center justify-content-center rounded-lg bg-primary bg-opacity-25 p-2"
                                    style={{ width: '54px', height: '54px' }}
                                >
                                    <Image alt={title} src={icon} width={32} height={32} color="blue" />
                                </div>
                                <div className="ms-3">

                                    <p className="fs-6 text-muted mb-0 mt-0">{title}</p>
                                        
                                    <p className="fw-bold mb-0" style={{ fontSize: '26px' }}>{value}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                                
            </div>
    )
}