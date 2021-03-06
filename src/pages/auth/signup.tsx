import styled from 'styled-components';
import tw from 'twin.macro';
import { EyeIcon, ArrowRightIcon, ArrowLeftIcon, CheckCircleIcon } from '@heroicons/react/solid';
import { MailIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { useEffect } from 'react';

const Wrapper = styled.div`
  ${tw`w-full min-h-screen bg-blue-300 flex justify-center items-center `}

  .form {
    ${tw`flex flex-col bg-white rounded-lg border-gray-300 border-2 p-6 sm:p-8 overflow-y-auto`}
    width: calc(100vw - 40px);
    height: calc(100vh - 40px);
    max-width: 520px;
    max-height: 600px;
  }

  .title {
    ${tw`w-full text-2xl font-bold mb-4`}
  }
`;

const FieldSet = ({ show, title, children }) => {
  return (
    show && (
      <fieldset className="flex flex-col w-full flex-grow pt-4">
        <legend className="table clear-both p-0 float-left font-bold text-lg mb-8">{title}</legend>
        <div className="clear-both flex-grow relative flex flex-col">{children}</div>
      </fieldset>
    )
  );
};

const FieldItem = styled.div<{ bottom?: boolean }>`
  ${({ bottom }) => (bottom ? tw` w-full flex flex-grow align-items[flex-end]` : tw`relative`)}
  ${tw`mb-4`}

  &:last-child {
    ${tw`mb-0`}
  }
`;

const ExampleTerms = () => {
  const [latestTerm, setLatestTerm] = useState('');

  useEffect(() => {
    (async () => {
      const response = await fetch('/terms.json');
      const data = await response.json();
      setLatestTerm(data.body);
    })();
  }, []);

  return (
    <div
      className="w-full h-60 overflow-y-auto border-2 border-gray-300 rounded-lg p-4 text-sm text-gray-800"
      dangerouslySetInnerHTML={{
        __html: latestTerm,
      }}
    ></div>
  );
};

const ProgressBar = ({ value = 1, max }) => {
  if (max < 1) {
    throw new Error('max cannot be under 1');
  }
  return (
    <div className="bg-gray-300 h-1">
      <div
        className="bg-blue-400 h-1"
        style={{
          transition: 'width 0.5s ease-in-out',
          width: (value / max) * 100 + '%',
        }}
      ></div>
    </div>
  );
};

const AuthSignupPage = () => {
  const [step, setStep] = useState(1);
  const totalStep = 3;

  return (
    <Wrapper>
      <form className="form" action="#">
        <h1 className="title">
          ????????????{' '}
          <small className={`${step < totalStep ? 'text-gray-400' : 'text-black'}`}>
            ({step}??????/{totalStep}??????)
          </small>
        </h1>

        <ProgressBar value={step} max={totalStep} />

        <FieldSet title="???????????? ??????" show={step === 1}>
          <FieldItem>
            <label className="block text-base font-bold mb-1" htmlFor="email">
              ?????????
            </label>
            <input
              id="email"
              className="block border-2 border-gray-300 w-full p-2 rounded-lg"
              type="email"
              placeholder="example@email.com"
            />
            <p className="text-sm mt-2 font-normal text-red-500">????????? ????????? ?????????????????????.</p>
          </FieldItem>

          <FieldItem>
            <label className="block text-sm font-bold mb-1" htmlFor="password">
              ????????????
            </label>
            <input className="block border-2 border-gray-300 w-full p-2 rounded-lg" id="password" type="password" />
            <button className="block bg-white p-2 rounded-md hover:shadow-md absolute right-4 top-7">
              <EyeIcon className="w-5" />
              {/* <EyeOffIcon className="w-5" /> */}
            </button>
            <ul className="pt-2">
              <li className="text-sm text-gray-400 mb-1">
                <span className="inline-block align-middle mr-2">8??? ??????</span>
                <CheckCircleIcon className="w-4 inline-block align-middle" />
              </li>
              <li className="text-sm text-gray-400">
                <span className="inline-block align-middle mr-2">???????????? ?????? ??????</span>
                <CheckCircleIcon className="w-4 inline-block align-middle" />
              </li>
            </ul>
          </FieldItem>
          <FieldItem bottom>
            <button
              className="w-full bg-blue-500 hover:bg-blue-300 text-white hover:text-black font-bold py-2 px-4 rounded-lg flex flex-row items-center justify-center"
              onClick={() => {
                setStep(2);
              }}
            >
              <span className="block mr-2">??????</span>
              <ArrowRightIcon className="h-4" />
            </button>
          </FieldItem>
        </FieldSet>

        <FieldSet title="????????? ??????" show={step === 2}>
          <FieldItem>
            <div className=" bg-gray-100 text-center p-4">
              <MailIcon className="w-10 block mx-auto mb-4" />
              <em className="font-bold not-italic text-blue-500">test@example.com</em> ?????? ??????????????? ??????????????????.
              <br />
              ???????????? ???????????? ??????????????????.
            </div>
          </FieldItem>
          <FieldItem>
            <label className="block text-sm font-bold mb-1" htmlFor="verify-code">
              ????????????
            </label>
            <input
              className="block border-2 border-gray-300 w-full p-2 rounded-lg"
              id="verify-code"
              type="text"
              placeholder="????????????"
            />
            <p className="text-sm mt-2 font-normal text-red-500">??????????????? ???????????? ????????????.</p>
          </FieldItem>
          <FieldItem bottom>
            <button
              className="bg-blue-500 mr-2 hover:bg-blue-300 text-white hover:text-black font-bold py-2 px-4 rounded-lg flex flex-row items-center justify-center"
              onClick={() => {
                setStep(1);
              }}
            >
              <ArrowLeftIcon className="h-4" />
              <span>??????</span>
            </button>
            <button
              className="flex-grow bg-blue-500 hover:bg-blue-300 text-white hover:text-black font-bold py-2 px-4 rounded-lg flex flex-row items-center justify-center"
              onClick={() => {
                setStep(3);
              }}
            >
              <span className="block mr-2">???????????? ??????</span>
              {/* <ArrowRightIcon className="h-4" /> */}
            </button>
          </FieldItem>
        </FieldSet>

        <FieldSet title="?????? ??????" show={step === 3}>
          <FieldItem>
            <div className="pb-4">
              <ExampleTerms />
            </div>
          </FieldItem>
          <FieldItem>
            <input
              id="all-terms-agree"
              type="checkbox"
              className="cursor-pointer inline-block align-middle mr-4 w-6 h-6 appearance-none border-2 border-gray-300 rounded-full checked:bg-blue-500"
            />
            <label className="inline-block align-middle" htmlFor="all-terms-agree">
              ??????????????? ???????????????.
            </label>
          </FieldItem>
          <FieldItem bottom>
            <button
              className="flex-grow bg-blue-500 mr-2 hover:bg-blue-300 text-white hover:text-black font-bold py-2 px-4 rounded-lg flex flex-row items-center justify-center"
              onClick={() => {
                setStep(1);
              }}
            >
              ??????
            </button>
          </FieldItem>
        </FieldSet>
      </form>
    </Wrapper>
  );
};

export default AuthSignupPage;
