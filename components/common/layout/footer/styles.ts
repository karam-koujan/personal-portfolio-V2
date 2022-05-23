import styled from "styled-components";

const CopyRight = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.2rem;
  margin: 4rem auto 0 auto;
  width: fit-content;
  @media (${devices.medium}) {
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;
const Footer = styled.footer`
  height: 100%;
  background-color: var(--primary);
  bottom: 0;
  padding: min(7rem, 30vh) 0 1rem 0;
  position: relative;
  &::before {
    background-color: white;
    content: "";
    height: 105px;
    left: -10px;
    right: 0px;
    clip-path: polygon(0% 0%, 100% 100%, 100% 0%);
    position: absolute;
    top: -1px;
  }
`;
const ContactLink = styled(Button)`
  background-color: var(--blue);
  border: none;
  max-width: 210px;
  width: 90%;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
  &:hover,
  &:focus {
    background-color: transparent;
    border: 2px solid var(--blue);
    transform: scale(1.1);
  }
  @media (${devices.medium}) {
    margin: 0 auto;
  }
`;
const Icon = styled.span`
  align-self: center;
  width: 24px;
  & svg {
    fill: #4b6cc1;
  }
`;
const SocialMediaList = styled.ul`
  padding: 0;
  margin: 4rem 0 0 0;
`;
const SocialMediaLink = styled.a`
  color: var(--nav-link);
  font-size: 1.15rem;
  font-weight: 400;
  letter-spacing: 1px;
  margin-left: 0.5rem;
  text-transform: capitalize;
  transition: color 0.5s ease-in-out;

  &:hover,
  &:focus {
    color: white;
  }
`;
const SocialMediaItem = styled.li`
  align-items: center;
  display: flex;
  list-style: none;
  margin: 0 0 2rem 0;
`;

const Text = styled.p`
  color: white;
  font-size: 1.12rem;
  margin: 0;
`;
const Title = styled.h2`
  color: white;
  font-size: clamp(2.3rem, 6vw, 3rem);
  font-weight: normal;
  @media (${devices.medium}) {
    text-align: center;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  @media (${devices.small}) {
    align-items: center;
    flex-direction: column;
  }
`;

export {
  ContactLink,
  CopyRight,
  Footer,
  Icon,
  SocialMediaList,
  SocialMediaLink,
  SocialMediaItem,
  Text,
  Title,
  Wrapper
};
