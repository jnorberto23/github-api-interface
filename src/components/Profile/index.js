import React from 'react';
import * as S from './style';

const Profile = () => {
    return (
        <S.Wrapper>
            <S.WrapperImage
                src="https://avatars.githubusercontent.com/u/583231?v=4"
                alt="github profile avatar"
            />
            <S.WrapperInfoUser>
                <div>
                    <h1>Joao</h1>
                    <S.WrapperUserName>
                        <h3a>Username:</h3a>
                        <a
                            href="www.google.com.br"
                            target="_blank"
                            rel="noreferrer"
                        >
                            norberto
                        </a>
                    </S.WrapperUserName>
                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Starred</h4>
                        <span>6</span>
                    </div>
                    <div>
                        <h4>Followings</h4>
                        <span>2</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    )
};

export default Profile;