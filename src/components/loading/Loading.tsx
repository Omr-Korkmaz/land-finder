import React, { FunctionComponent } from "react";
import "./loading.scss";

interface ILoadingProps {
[x: string]: any;
loading: boolean;
}

const Loading: FunctionComponent<ILoadingProps> = ({ loading, children }) => {
if (loading) {
return (
<section className="loading">
<h1 className="loading__text">Loading...</h1>
</section>
);
}

return <>{children}</>;
};

export default Loading;