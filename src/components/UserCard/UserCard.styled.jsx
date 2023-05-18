import styled from "styled-components";

export const UserCard = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc((100% - 60px) / 3);
  width: 380px;
  height: 460px;
  margin: 10px;
  padding: 28px 36px 36px 36px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const AvatarFrame = styled.div`
  position: absolute;
  top: 178px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;

  width: 62px;
  height: 62px;
  overflow: hidden;
  border-radius: 50%;
  background-color: transparent;
  z-index: 1;
`;

export const Avatar = styled.img`
  width: 110%;
  height: 110%;
  object-fit: cover;
  border-radius: 50%;

  box-shadow: 0px -2.19582px 4.39163px #ae7be3, 0px 4.39163px 3.29372px #fbf8ff;
`;

export const EmptyAvatarLayer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 62px;
  height: 62px;
  border-radius: 50%;
  background-color: #5736a3;

  box-shadow: 0px -2.19582px 4.39163px #ae7be3, 0px 4.39163px 3.29372px #fbf8ff;
`;

export const CenterLine = styled.span`
  position: absolute;
  top: 214px;
  left: 50%;
  transform: translate(-50%, -0%);
  width: 100%;
  height: 8px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const DialogueClouds = styled.img`
  width: 308px;
  margin-bottom: 88px;
`;

export const GoitLogo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
`;

export const TweetsNumber = styled.p`
  margin-bottom: 16px;
  font-family: "Montserrat-Medium";
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
`;

export const FollowersNumber = styled.p`
  margin-bottom: 26px;
  font-family: "Montserrat-Medium";
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
`;
