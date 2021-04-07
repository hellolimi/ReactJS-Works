import React from 'react';
import Items from './Items';

function List(){
    return(
        <div className="listBlock">
            <Items text="운동하기" done={1} />
            <Items text="맛있는 저녁 준비하기" done={0} />
        </div>
    );
}

export default List;