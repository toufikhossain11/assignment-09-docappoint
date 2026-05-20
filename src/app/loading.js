import { Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
    return (
        <div>
            <div className="flex items-center justify-center gap-4 my-50">
      <Spinner size="lg"/>
    </div>
        </div>
    );
};

export default loading;