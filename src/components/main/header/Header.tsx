import { Button, IconButton, ToggleButton } from "@/components/common/buttons";
import MenuDropDown from "@/components/common/dropdown/MenuDropDown";
import { resetCredentials } from "@/redux/features/auth/authSlice";
import { useGetMyProfileQuery } from "@/redux/features/profile/api";
import { AppDispatch, RootState } from "@/redux/store";
import { useRouter } from "@/router/hooks";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC<{
    handleSidebar: () => void;
}> = () => {
    const { data: profileResponse } = useGetMyProfileQuery();
    const { token } = useSelector((state: RootState) => state.auth);

    const [profileMenuOpen, setProfileMenuOpen] = useState(false);
    const dispatch: AppDispatch = useDispatch();
    const { reload, push } = useRouter();

    const renderProfileButton = () => {
        return (
            <MenuDropDown open={profileMenuOpen}>
                <div className="flex items-center gap-2 p-1 pb-4 mb-2 border-b border-[#8b8b8b20]">
                    <div className="w-10 h-10 bg-[#8b8b8b50] rounded-full"></div>
                    <div className="text-start">
                        <p className="font-medium text-sm">
                            {profileResponse?.data[0].username}
                        </p>
                        <p className="font-medium text-xs opacity-50">
                            {profileResponse?.data[0].email}
                        </p>
                    </div>
                </div>

                <div className="w-full">
                    <IconButton
                        width="full"
                        label="Stream studio"
                        iconPath="/icons/cast.svg"
                        onClick={() => {
                            push("/studio");
                        }}
                    />
                    <IconButton
                        width="full"
                        label="Dark theme"
                        iconPath="/icons/moon.svg"
                        onClick={() => { }}
                    >
                        <div className="flex-1 flex justify-end scale-[.8]">
                            <ToggleButton
                                toggled={false}
                                onToggle={function (): void {
                                    throw new Error("Function not implemented.");
                                }}
                            />
                        </div>
                    </IconButton>
                    {token && (
                        <>
                            <div className="my-4 h-[1px] w-full bg-[#8b8b8b20]" />
                            <IconButton
                                width="full"
                                label="Logout"
                                iconPath="/icons/logout.svg"
                                onClick={() => {
                                    dispatch(resetCredentials());
                                    reload();
                                }}
                            />
                        </>
                    )}
                </div>
            </MenuDropDown>
        );
    };

    return (
        <div className=" sticky top-0 w-full h-[3rem] px-[.8rem] flex items-center justify-between bg-[var(--paperColor)] shadow-sm">
            <div className="flex items-center gap-6 h-full">
                <div className="flex items-center gap-2">
                    <img className="w-7" src="/logo.svg" />
                </div>
                <nav className="h-full flex gap-3 items-center">
                    <NavButton label="Streaming now" path="/live" />
                    <NavButton label="Following" path="/following" />
                </nav>
            </div>
            <div className="flex items-center gap-1">
                {token ? (
                    <>
                        <IconButton onClick={() => null} iconPath="/icons/bell.svg" />
                        <button className="relative rounded-[var(--borderRadiusPrimary)]">
                            <IconButton
                                onClick={() => setProfileMenuOpen((state) => !state)}
                                iconPath="/icons/user.svg"
                            />
                            {renderProfileButton()}
                        </button>
                    </>
                ) : (
                    <>
                        <Button onClick={() => push('/login')}>Login</Button>
                        <Button onClick={() => push('/register')} variant="filled">Register</Button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;

const NavButton: React.FC<{ label: string; path: string }> = ({
    label,
    path,
}) => {
    const location = useLocation();
    const activeClass = "border-[var(--primaryMainColor)]";
    const btnClass = `h-full text-sm font-semibold tracking-tight
    border-b-[2.5px]
    ${location.pathname.endsWith(path) ? activeClass : " border-transparent"}`;

    return (
        <Link className="h-full" to={path}>
            <button className={btnClass}>{label}</button>
        </Link>
    );
};
