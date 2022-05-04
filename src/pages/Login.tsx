
import { useLogin } from "@pankod/refine-core";

import { AntdLayout, Button } from "@pankod/refine-antd";
import { useAuth } from "react-oidc-context";

export const Login: React.FC = () => {
    const {signinRedirect   } = useAuth();

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
                        <img src="./refine.svg" alt="Refine" />
                    </div>
                    <Button
                        type="primary"
                        size="large"
                        block
                        onClick={() => signinRedirect()}
                        >
                        Sign in
                    </Button>
                </div>
            </div>
        </AntdLayout>
    );
};
