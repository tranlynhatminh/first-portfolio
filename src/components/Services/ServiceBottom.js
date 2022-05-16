import React from 'react'
import { ImageList } from '@mui/material';
import { ImageListItem } from '@mui/material';

function ServiceBottom(props) {

        const seviceNameBottom = props.serviceName

        const imageUrls1 = [
            {
                img: 'https://user-images.githubusercontent.com/94737368/168518571-959747d0-c5dc-467d-b113-9a254bc73640.PNG',
                row: 2,
                col: 2
            },
            {
                img: "https://user-images.githubusercontent.com/94737368/168518738-4fc6add3-1996-4019-872b-517e8b3e4d57.PNG"
            },
            {
                img: "https://user-images.githubusercontent.com/94737368/168518826-e3452adf-5363-476a-a072-9a270877c2d9.PNG"
            },
            {
                img: "https://user-images.githubusercontent.com/94737368/168518830-8a8c5403-c1ad-4aca-922c-81666cee59bd.PNG"
            },
            
            {
                img: "https://user-images.githubusercontent.com/94737368/168518831-ad1d37ea-2908-4b4c-ac8e-1a3c084a0e36.PNG"
            },
            {
                img: "https://user-images.githubusercontent.com/94737368/168518835-e4b539bb-04fd-4639-aee3-f5de8613c8a9.PNG"
            }
        ];
        const imageUrls2 = [
            {
                img: "https://user-images.githubusercontent.com/94737368/168518738-4fc6add3-1996-4019-872b-517e8b3e4d57.PNG",
                row: 2,
                col: 2
            },
            {
                img: "https://user-images.githubusercontent.com/94737368/168518826-e3452adf-5363-476a-a072-9a270877c2d9.PNG"
            },
            {
                img: "https://user-images.githubusercontent.com/94737368/168518830-8a8c5403-c1ad-4aca-922c-81666cee59bd.PNG"
            },
            {
                img: "https://user-images.githubusercontent.com/94737368/168518831-ad1d37ea-2908-4b4c-ac8e-1a3c084a0e36.PNG"
            },
            
            {
                img: "https://user-images.githubusercontent.com/94737368/168518835-e4b539bb-04fd-4639-aee3-f5de8613c8a9.PNG"
            },
            {
                img: "https://user-images.githubusercontent.com/94737368/168518571-959747d0-c5dc-467d-b113-9a254bc73640.PNG"
            }
        ];
        const imageUrls3 = [
            {
                img: "https://user-images.githubusercontent.com/94737368/168518826-e3452adf-5363-476a-a072-9a270877c2d9.PNG",
                row: 2,
                col: 2
            },
            {
                img: "https://user-images.githubusercontent.com/94737368/168518830-8a8c5403-c1ad-4aca-922c-81666cee59bd.PNG"     
            },
            {
                img: "https://user-images.githubusercontent.com/94737368/168518831-ad1d37ea-2908-4b4c-ac8e-1a3c084a0e36.PNG"
            },
            {
                img: "https://user-images.githubusercontent.com/94737368/168518835-e4b539bb-04fd-4639-aee3-f5de8613c8a9.PNG"
            },
            
            {
                img: "https://user-images.githubusercontent.com/94737368/168518571-959747d0-c5dc-467d-b113-9a254bc73640.PNG"
            },
            {
                img: "https://user-images.githubusercontent.com/94737368/168518738-4fc6add3-1996-4019-872b-517e8b3e4d57.PNG"
            }
        ];
        const imageUrls4 = [
            {
                img: "https://user-images.githubusercontent.com/94737368/168518830-8a8c5403-c1ad-4aca-922c-81666cee59bd.PNG",
                row: 2,
                col: 2
            },
            {
                img: "https://user-images.githubusercontent.com/94737368/168518831-ad1d37ea-2908-4b4c-ac8e-1a3c084a0e36.PNG"
            },
            {
                img: "https://user-images.githubusercontent.com/94737368/168518835-e4b539bb-04fd-4639-aee3-f5de8613c8a9.PNG"    
            },
            {
                img: "https://user-images.githubusercontent.com/94737368/168518571-959747d0-c5dc-467d-b113-9a254bc73640.PNG"
            },
            
            {
                img: "https://user-images.githubusercontent.com/94737368/168518738-4fc6add3-1996-4019-872b-517e8b3e4d57.PNG"
            },
            {
                img: "https://user-images.githubusercontent.com/94737368/168518826-e3452adf-5363-476a-a072-9a270877c2d9.PNG"
            }
        ];
        const imageUrls5 = [
            {
                img: "https://user-images.githubusercontent.com/94737368/168518831-ad1d37ea-2908-4b4c-ac8e-1a3c084a0e36.PNG",
                row: 2,
                col: 2
            },
            {
                img: "https://user-images.githubusercontent.com/94737368/168518835-e4b539bb-04fd-4639-aee3-f5de8613c8a9.PNG"
            },
            {
                img: "https://user-images.githubusercontent.com/94737368/168518571-959747d0-c5dc-467d-b113-9a254bc73640.PNG"
            },
            {
                img: "https://user-images.githubusercontent.com/94737368/168518738-4fc6add3-1996-4019-872b-517e8b3e4d57.PNG"
            },
            
            {
                img: "https://user-images.githubusercontent.com/94737368/168518826-e3452adf-5363-476a-a072-9a270877c2d9.PNG"  
            },
            {
                img: "https://user-images.githubusercontent.com/94737368/168518830-8a8c5403-c1ad-4aca-922c-81666cee59bd.PNG"
            }
        ];

        return (
            <>            
                <div className={ seviceNameBottom === "all" ? "show-content" : "content-service"}>
                        <ImageList variant='quilted' cols={3} rowHeight={361} sw={{width:1170, hieght:1150}}>
                                {imageUrls1.map((item, i) => (
                                    <ImageListItem key={i} cols={item.col || 1} rows={item.row || 1}>
                                            <img
                                                src={item.img}
                                            />
                                    </ImageListItem>
                                ))}
                        </ImageList>
                </div>
                <div className={ seviceNameBottom === "brading" ? "show-content" : "content-service"}>
                    <ImageList variant='quilted' cols={3} rowHeight={361} sw={{width:1170, hieght:1150}}>
                            {imageUrls2.map((item, i) => (
                                <ImageListItem key={i} cols={item.col || 1} rows={item.row || 1}>
                                    <img
                                        src={item.img}
                                    />
                                </ImageListItem>
                            ))}
                    </ImageList>
                </div>
                <div className={ seviceNameBottom === "logo" ? "show-content" : "content-service"}>
                    <ImageList variant='quilted' cols={3} rowHeight={361} sw={{width:1170, hieght:1150}}>
                            {imageUrls3.map((item, i) => (
                                <ImageListItem key={i} cols={item.col || 1} rows={item.row || 1}>
                                    <img
                                        src={item.img}
                                    />
                                </ImageListItem>
                            ))}
                    </ImageList>
                </div>
                <div className={ seviceNameBottom === "ui/ux" ? "show-content" : "content-service"}>
                    <ImageList variant='quilted' cols={3} rowHeight={361} sw={{width:1170, hieght:1150}}>
                            {imageUrls4.map((item, i) => (
                                <ImageListItem key={i} cols={item.col || 1} rows={item.row || 1}>
                                    <img
                                        src={item.img}
                                    />
                                </ImageListItem>
                            ))}
                    </ImageList>
                </div>
                <div className={ seviceNameBottom === "web design" ? "show-content" : "content-service"}>
                    <ImageList variant='quilted' cols={3} rowHeight={361} sw={{width:1170, hieght:1150}}>
                            {imageUrls5.map((item, i) => (
                                <ImageListItem key={i} cols={item.col || 1} rows={item.row || 1}>
                                    <img
                                        src={item.img}
                                    />
                                </ImageListItem>
                            ))}
                    </ImageList>
                </div>
            </>
        )
    }

    export default ServiceBottom