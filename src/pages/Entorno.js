const Entorno = () => {
  return (
    <div className="relative bg-white w-full h-[1287px] flex flex-col items-center justify-start gap-[0px] text-left text-3xl text-violet font-poppins">
      <div className="self-stretch bg-white h-[78px] shrink-0 flex flex-row p-[11px_45px] box-border items-center justify-start text-sm md:flex">
        <div className="flex-1 flex flex-row items-center justify-between">
          <img
            className="relative w-[124.63px] h-[31px] shrink-0 overflow-hidden"
            alt=""
            src="../icon-cowallet-1.svg"
          />
          <div className="w-[164.9px] shrink-0 flex flex-row items-center justify-start relative gap-[20px] md:flex">
            <div className="flex flex-row items-start justify-start gap-[20px] z-[0] md:hidden">
              <div className="relative leading-[104.5%] font-semibold inline-block w-[74px] h-[13px] shrink-0 [text-shadow:0px_0px_0px_rgba(255,_255,_255,_0.01)]">
                Iniciar sesión
              </div>
              <div className="relative leading-[104.5%] font-semibold inline-block w-[70px] h-[13px] shrink-0 [text-shadow:0px_0px_0px_rgba(255,_255,_255,_0.01)]">
                Regístrate
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute m-[0_!important] top-[-6px] left-[164px] w-[21px] h-[24px] shrink-0 hidden z-[1] md:flex md:rounded-[0px]">
              <button className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-[url(../public/menu1@3x.png)] bg-cover bg-no-repeat bg-[top] md:flex" />
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col p-[10px] box-border items-center justify-center relative gap-[0px] text-center text-indigo-100">
        <img
          className="relative w-[1455px] h-[406px] shrink-0 object-cover z-[0]"
          alt=""
          src="../imagen@2x.png"
        />
        <div className="absolute m-[0_!important] top-[123px] left-[79px] w-[579px] h-[152px] shrink-0 z-[2]">
          <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-start gap-[31px]">
            <img
              className="relative w-[57.16px] h-[57px] shrink-0"
              alt=""
              src="../vector.svg"
            />
            <div className="relative leading-[127.5%] inline-block w-[579px]">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                <span className="font-semibold">{`¿Cómo solicitar dinero `}</span>
              </p>
              <p className="m-[0] text-indigo-500">
                <b>{`a varios conocidos? `}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-row p-[31px_20px] box-border items-center justify-center text-center text-indigo-100">
        <div className="flex flex-row p-[10px] box-border items-center justify-center">
          <div className="relative leading-[104.5%] inline-block">
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              <span className="font-medium">{`Todo en `}</span>
            </p>
            <p className="m-[0] text-4xl text-indigo-500">
              <span className="font-semibold">
                <span className="text-indigo-500">4</span>
                <span className="text-indigo-100">{` `}</span>
                <span>sencillos pasos</span>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white h-[393px] shrink-0 flex flex-row p-[25px_24px] box-border items-start justify-start text-xl lg:flex-row lg:pl-[250px] lg:pr-[0px] lg:box-border md:pl-[10px] md:pr-[40px] md:box-border sm:pl-[0px] sm:pr-[100px] sm:box-border">
        <div className="self-stretch flex-1 flex flex-row items-center justify-center relative lg:flex-row">
          <div className="absolute m-[0_!important] top-[59.5px] left-[296px] w-[825px] h-[224px] shrink-0 z-[0]">
            <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-center gap-[39px] lg:flex-col">
              <div className="h-[224px] flex flex-row items-center justify-center lg:flex-row">
                <div className="relative w-[205px] h-[207px] shrink-0">
                  <img
                    className="absolute top-[0px] left-[0px] w-[170px] h-[157px] object-cover"
                    alt=""
                    src="../numero-imagen1-1@2x.png"
                  />
                  <div className="absolute top-[160px] left-[0px] w-[205px] h-[47px]">
                    <div className="absolute top-[0px] left-[0px] leading-[104.5%] font-semibold inline-block w-[205px] h-[15px]">
                      Crea tu campaña
                    </div>
                    <div className="absolute top-[25px] left-[0px] text-base leading-[104.5%] font-semibold text-gray text-center inline-block w-[194px] h-[22px] [text-shadow:0px_0px_0px_rgba(255,_255,_255,_0.01)]">
                      <p className="[margin-block-start:0] [margin-block-end:0px]">{`Define las condiciones `}</p>
                      <p className="m-[0]">del préstamo.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[200.93px] flex flex-row items-center justify-center text-blue lg:flex-row">
                <div className="relative w-[160px] h-[200.93px] shrink-0">
                  <img
                    className="absolute top-[0px] left-[0px] w-[113px] h-[158px] object-cover"
                    alt=""
                    src="../numero-imagen2-1@2x.png"
                  />
                  <div className="absolute top-[164px] left-[0px] w-[160px] h-[36.93px]">
                    <div className="absolute top-[0px] left-[0px] leading-[104.5%] font-semibold inline-block w-[160px] h-[13px]">
                      Crea tu cuenta
                    </div>
                    <div className="absolute top-[25px] left-[0px] text-base leading-[104.5%] font-semibold text-gray text-center inline-block w-[149.19px] h-[11.93px]">
                      Inicia sesión o crea tu perfil
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[211.16px] flex flex-row items-center justify-center text-indigo-300 lg:flex-row">
                <div className="relative w-[173px] h-[211.16px] shrink-0">
                  <img
                    className="absolute top-[0px] left-[0px] w-[173px] h-[164px] object-cover"
                    alt=""
                    src="../numero-imagen3-1@2x.png"
                  />
                  <div className="absolute top-[164px] left-[41.72px] w-[131.28px] h-[47.16px]">
                    <div className="absolute top-[0px] left-[13px] leading-[104.5%] font-semibold inline-block w-[104.86px] h-[14.49px] [text-shadow:0px_0px_0px_rgba(255,_255,_255,_0.01)]">
                      Comparte
                    </div>
                    <div className="absolute top-[25px] left-[0px] text-base leading-[104.5%] font-semibold text-gray text-center inline-block w-[131.28px] h-[22.16px] [text-shadow:0px_0px_0px_rgba(255,_255,_255,_0.01)]">
                      Envíale a amigos tu campaña
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[216px] flex flex-row items-center justify-center text-3xl text-indigo-400 lg:flex-row">
                <div className="relative w-[170px] h-[216px] shrink-0">
                  <img
                    className="absolute top-[0px] left-[0px] w-[170px] h-[166px] object-cover"
                    alt=""
                    src="../numero-imagen4-1@2x.png"
                  />
                  <div className="absolute top-[166px] left-[0px] w-[166px] h-[50px]">
                    <div className="absolute top-[0px] left-[48px] leading-[104.5%] font-semibold inline-block w-[75px] h-[15px] [text-shadow:0px_0px_0px_rgba(255,_255,_255,_0.01)]">
                      <span>¡</span>
                      <span className="text-2xl">Listo</span>
                      <span>!</span>
                    </div>
                    <div className="absolute top-[28px] left-[0px] text-base leading-[104.5%] font-semibold text-gray text-center inline-block w-[166px] h-[22px] [text-shadow:0px_0px_0px_rgba(255,_255,_255,_0.01)]">
                      Recibe desembolso, invierte y paga
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[78.5px] left-[170px] flex flex-col items-start justify-start">
              <div className="relative w-[491.81px] h-[32.94px] shrink-0 lg:hidden">
                <img
                  className="absolute top-[0.13px] left-[0px] w-[32.81px] h-[32.81px] overflow-hidden"
                  alt=""
                  src="../iconsaxlineararrowcircledown2.svg"
                />
                <img
                  className="absolute top-[0px] left-[200px] w-[32.81px] h-[32.81px] overflow-hidden"
                  alt=""
                  src="../iconsaxlineararrowcircledown21.svg"
                />
                <img
                  className="absolute top-[0.13px] left-[459px] w-[32.81px] h-[32.81px] overflow-hidden"
                  alt=""
                  src="../iconsaxlineararrowcircledown22.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-[31px_559px] bg-white self-stretch h-[113px] shrink-0 flex flex-row box-border items-center justify-center lg:p-[750px_100px_100px_220px] lg:box-border md:flex-col md:p-[800px_0px_100px_300px] md:box-border sm:pl-[520px] sm:box-border">
        <button className="cursor-pointer [border:none] p-[0] bg-[transparent] self-stretch flex-1 flex flex-col items-center justify-between lg:flex-col md:pr-[0px] md:box-border md:ml-[-222] md:flex-[unset] md:self-stretch">
          <div className="rounded-[18px] bg-blue shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.01)] flex flex-row p-[15px_18px] box-border items-center justify-center">
            <div className="relative text-xl leading-[104.5%] font-semibold font-poppins text-white text-center inline-block">{`Crea tu tarjeta de préstamo `}</div>
          </div>
        </button>
      </button>
    </div>
  );
};

export default Entorno;
