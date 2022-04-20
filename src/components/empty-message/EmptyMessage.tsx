import { FC } from 'react';

const EmptyMessage: FC = ({children}) => {

    return (
        <div className="text-danger mx-auto my-auto">
            <p>{children}</p>
        </div>
    )
};

export default EmptyMessage;