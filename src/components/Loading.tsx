

import { AntdLayout,  Typography } from "@pankod/refine-antd";




export const Loading: React.FC = () => {

    const { Title } = Typography;

    return (
<AntdLayout
style={{
    background: `radial-gradient(50% 50% at 50% 50%, #63386A 0%, #310438 100%)`,
    backgroundSize: "cover",
}}
>
<div style={{ height: "100vh", display: "flex" }}>
    <div style={{ maxWidth: "200px", margin: "auto" }}>
        <div style={{ marginBottom: "28px" }}>
        <Title level={3} style={{  color: "white" }}>Loading ...</Title>
        </div>

    </div>
</div>
</AntdLayout>
    );
};
