import { Button } from 'antd';
import React from 'react';
import GetAnimeImage from '../hook/GetAnimeImage';


function Test(props) {
    return (
        <div>
            <Button onClick={GetAnimeImage}>테스트 버튼입니다.</Button>
        </div>
    );
}

export default Test;