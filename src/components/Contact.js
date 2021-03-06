import React, { useState, useContext, useEffect } from 'react';
import { gsap } from 'gsap';
import { StormwellContext } from '../App';
import { ig, fb, pinterest, twitter } from '../images/coupons';

const Contact = () => {
    const { contactEl, viewport } = useContext(StormwellContext);
    const [checked, setChecked] = useState(false),
          [birthday, setBirthday] = useState(),
          [birthmonth, setBirthmonth] = useState(),
          [birthyear, setBirthyear] = useState(),
          [ageEligible, setAgeEligible] = useState(null),
          [desktopAnimation, setDesktopAnimation] = useState(),
          [mobileAnimation, setMobileAnimation] = useState();
    let formEl = {};

    useEffect(() => {
        setDesktopAnimation( 
            gsap.timeline()
                .to('.container__btn__outline', { rotate: 180, transformOrigin: "50% 50%", duration: 1.2 })
                .to('.container__btn', { transform: "translateY(100%)", duration: 1 }, '<')                
                .to('.textbox__form', { display: "block", left: 0, duration: 1 }, '<')
                .to('.textbox__heading > path', { stroke: "#E4485F", fill: "#E4485F", duration: .4 }, '-=.6')
                //.to('.textbox__heading', { transform: "translateY(-150%)", ease: "elastic.out(1, 0.3)", duration: 1.2 }, '<')
                .to('.textbox__heading', { position: "absolute", top: "100%", transform: "translateY(150%)" }, '<')
                .to('.exclamation', { display: "block" }, '<')
                //.to('.textbox__socials__grid', { opacity: 0, duration: .1 }, '<')
                .reverse() 
        )

        setMobileAnimation (
            gsap.timeline()
                .to('.container__btn__outline', { rotate: 270, transformOrigin: "50% 50%", duration: 1.2 })
                .to('.container__btn', { transform: "translateY(-100%)", duration: 1 }, '<')
                .to('.textbox__form', { left: 0, duration: 1, width: "84vw" }, '<')
                //.to('.textbox__socials__grid', { opacity: 0, duration: .01 }, '-=.5')
                .to('.textbox__heading', { maxWidth: "160%", duration: .01 }, '-=.3')
                .to('.exclamation', { display: "block" }, '<')
                .to('.textbox__heading > path', { stroke: "#E4485F", fill: "#E4485F", duration: .01 }, '<')
                .to('.textbox__heading', { transform: "translateY(-150%)", ease: "elastic.out(1, 0.3)", duration: 1.2 }, '-=.5')
                .reverse()
        )           
    }, [])

    // const handleClick = () => {
    //     if (viewport >= 800 && desktopAnimation.reversed()) {
    //         desktopAnimation.play()
    //     } else if (viewport >= 800 && !desktopAnimation.reversed() || viewport >= 800 && !mobileAnimation.reversed()) {
    //         desktopAnimation.reverse()
    //     } else if (viewport < 800 && mobileAnimation.reversed()) {
    //         mobileAnimation.play()
    //     } else {
    //         mobileAnimation.reverse()
    //     }
    // }

    const isEmpty = () => {
        let inputElements = [...formEl.children].slice(0, 2);

        inputElements.forEach(input => {
            if (input.children[1].value.trim() === '') {
                input.classList.add('invalid')
                input.children[2].innerText = `This field cannot be empty`
            } else {
                input.classList.remove('invalid')
            }
        })
    }

    const isValid = () => {
        let email = formEl.children[1];

        if (!validateEmail(email.children[1].value.trim()) && email.children[1].value !== '') {
            email.classList.add('invalid')
            email.children[2].innerText = `Please use a valid email address`
        } else {
            isEmpty(email.children[1].value.trim())
        }

        function validateEmail(email) {
            let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return validEmail.test(String(email).toLowerCase());
        }
    }

    const ageCheck = () => {
        let year = new Date().getFullYear(),
            month = new Date().getMonth() + 1,
            day = new Date().getDate();

        if (year - birthyear > 21) setAgeEligible(true)
        if (year - birthyear < 21) setAgeEligible(false)

        if (year - birthyear === 21) {
            if (month > birthmonth) setAgeEligible(true)
            else if (month <= birthmonth) {
                if (day >= birthday) setAgeEligible(true)
                else setAgeEligible(false)
            }
        }
    }

    const birthdayErrorStates = () => {
        let formControl = document.querySelector('.control--birthday'),
            formControlElements = [...formControl.children].slice(1, 4);

        formControlElements.forEach(el => {
            if (el.value === '' || el.value === 'MM') {
                el.classList.add('invalid')
            } else {
                el.classList.remove('invalid')
            }
        })

        if (!birthyear && !birthmonth && !birthday) {
            formControl.classList.add('invalid')
            formControl.children[4].innerText = `This field cannot be empty`
        } else if (!birthmonth || !birthyear || !birthday) {
            formControl.classList.add('invalid')
            formControl.children[4].innerText = `Please complete this field`
        } else if (!ageEligible) {
            formControl.classList.add('invalid')
            formControl.children[4].innerText = `You must be 21 or older`
        } else {
            formControl.classList.remove('invalid')
        }
    }

    const handleFormValidation = (e) => {
        let checkbox = document.querySelector('.control--checkbox');

        if (!checked) checkbox.classList.add('invalid')
        else checkbox.classList.remove('invalid')
        
        e.preventDefault();
        isEmpty(); isValid(); birthdayErrorStates();
    }

    const openAccordion = () => {
        setChecked(!checked);

        if    (formEl.style.maxHeight) formEl.style.maxHeight = null
        else  formEl.style.maxHeight = formEl.scrollHeight + 30 + 'px';
    }


    return (
        <section className="contact" id="contact" ref={contactEl}>
            <div className="contact__textbox">              
                <svg className="textbox__heading" width="885" height="75" viewBox="0 0 885 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.64 45.616L20.536 53.2V70H1.72V2.79999H20.536V30.736L46.552 2.79999H67.48L40.024 32.56L68.92 70H46.84L27.64 45.616Z" stroke="black"/>
                    <path d="M130.74 55.312V70H76.7875V2.79999H129.492V17.488H95.6035V28.816H125.46V43.024H95.6035V55.312H130.74Z" stroke="black"/>
                    <path d="M198.119 55.312V70H144.167V2.79999H196.871V17.488H162.983V28.816H192.839V43.024H162.983V55.312H198.119Z" stroke="black"/>
                    <path d="M242.268 2.79999C248.348 2.79999 253.628 3.82399 258.108 5.87199C262.588 7.856 266.043 10.736 268.475 14.512C270.907 18.224 272.124 22.608 272.124 27.664C272.124 32.72 270.907 37.104 268.475 40.816C266.043 44.528 262.588 47.408 258.108 49.456C253.628 51.44 248.348 52.432 242.268 52.432H230.555V70H211.548V2.79999H242.268ZM241.116 37.456C245.02 37.456 247.964 36.624 249.948 34.96C251.932 33.232 252.923 30.8 252.923 27.664C252.923 24.528 251.932 22.096 249.948 20.368C247.964 18.64 245.02 17.776 241.116 17.776H230.555V37.456H241.116Z" stroke="black"/>
                    <path d="M316.026 2.79999H335.034V70H316.026V2.79999Z" stroke="black"/>
                    <path d="M415.374 2.79999V70H399.725L370.061 34.192V70H351.438V2.79999H367.086L396.75 38.608V2.79999H415.374Z" stroke="black"/>
                    <path d="M476.783 17.872H456.143V2.79999H516.335V17.872H495.791V70H476.783V17.872Z" stroke="black"/>
                    <path d="M559.247 71.344C552.143 71.344 545.743 69.84 540.047 66.832C534.415 63.824 529.967 59.664 526.703 54.352C523.503 49.04 521.903 43.056 521.903 36.4C521.903 29.744 523.503 23.76 526.703 18.448C529.967 13.136 534.415 8.976 540.047 5.96799C545.743 2.95999 552.143 1.45599 559.247 1.45599C566.351 1.45599 572.719 2.95999 578.351 5.96799C584.047 8.976 588.495 13.136 591.695 18.448C594.959 23.76 596.591 29.744 596.591 36.4C596.591 43.056 594.959 49.04 591.695 54.352C588.495 59.664 584.047 63.824 578.351 66.832C572.719 69.84 566.351 71.344 559.247 71.344ZM559.247 55.6C562.639 55.6 565.711 54.8 568.463 53.2C571.215 51.6 573.391 49.36 574.991 46.48C576.591 43.536 577.391 40.176 577.391 36.4C577.391 32.624 576.591 29.296 574.991 26.416C573.391 23.472 571.215 21.2 568.463 19.6C565.711 18 562.639 17.2 559.247 17.2C555.855 17.2 552.783 18 550.031 19.6C547.279 21.2 545.103 23.472 543.503 26.416C541.903 29.296 541.103 32.624 541.103 36.4C541.103 40.176 541.903 43.536 543.503 46.48C545.103 49.36 547.279 51.6 550.031 53.2C552.783 54.8 555.855 55.6 559.247 55.6Z" stroke="black"/>
                    <path d="M640.434 71.344C630.45 71.344 622.674 68.624 617.106 63.184C611.602 57.744 608.85 50.032 608.85 40.048V2.79999H627.858V39.472C627.858 50.224 632.114 55.6 640.626 55.6C649.074 55.6 653.298 50.224 653.298 39.472V2.79999H672.018V40.048C672.018 50.032 669.234 57.744 663.666 63.184C658.162 68.624 650.418 71.344 640.434 71.344Z" stroke="black"/>
                    <path d="M721.279 71.344C714.239 71.344 707.903 69.872 702.271 66.928C696.703 63.92 692.319 59.76 689.119 54.448C685.919 49.136 684.319 43.12 684.319 36.4C684.319 29.68 685.919 23.664 689.119 18.352C692.319 13.04 696.703 8.91199 702.271 5.96799C707.903 2.95999 714.239 1.45599 721.279 1.45599C727.423 1.45599 732.959 2.54399 737.887 4.72C742.815 6.896 746.911 10.032 750.175 14.128L738.079 25.072C733.727 19.824 728.447 17.2 722.239 17.2C718.591 17.2 715.327 18 712.447 19.6C709.631 21.2 707.423 23.472 705.823 26.416C704.287 29.296 703.519 32.624 703.519 36.4C703.519 40.176 704.287 43.536 705.823 46.48C707.423 49.36 709.631 51.6 712.447 53.2C715.327 54.8 718.591 55.6 722.239 55.6C728.447 55.6 733.727 52.976 738.079 47.728L750.175 58.672C746.911 62.768 742.815 65.904 737.887 68.08C732.959 70.256 727.423 71.344 721.279 71.344Z" stroke="black"/>
                    <path d="M825.466 2.79999V70H806.458V43.792H780.538V70H761.53V2.79999H780.538V28.048H806.458V2.79999H825.466Z" stroke="black"/>
                    <path className="exclamation" d="M864.747 2.5H864.212L864.248 3.03384L867.348 48.7338L867.38 49.2H867.847H880.247H880.714L880.746 48.7338L883.846 3.03384L883.882 2.5H883.347H864.747ZM866.793 71.5536L866.8 71.5601L866.807 71.5664C868.773 73.3922 871.197 74.3 874.047 74.3C876.896 74.3 879.291 73.392 881.194 71.5602L881.194 71.5599C883.156 69.6682 884.147 67.3727 884.147 64.7C884.147 62.0342 883.194 59.8007 881.29 58.0365C879.386 56.2046 876.958 55.3 874.047 55.3C871.136 55.3 868.708 56.2046 866.804 58.0365C864.9 59.8007 863.947 62.0342 863.947 64.7C863.947 67.3667 864.9 69.6603 866.793 71.5536Z" stroke="black"/>
                </svg>
                <p className="textbox__subheading">like — watch — retweet — follow — comment — share</p>
                <div className="textbox__socials__grid">
                    <div className="grid__item">
                        <img className="grid__item--facebook" src={fb} alt="Facebook icon" />
                        <span>Stormwell Vodka</span>
                    </div>
                    <div className="grid__item">
                        <img className="grid__item--twitter" src={twitter} alt="Twitter icon" />
                        <span>@stormwell__vodka</span>
                    </div>
                    <div className="grid__item">
                        <img className="grid__item--instagram" src={ig} alt="Instagram icon" />
                        <span>@stormwell</span>
                    </div>
                    <div className="grid__item">
                        <img className="grid__item--pinterest" src={pinterest} alt="Pinterest icon" />
                        <span>Stormwell</span>
                    </div>
                </div>
            </div>

                {/* <div className="contact__btn__container">
                    <button onClick={handleClick} className="container__btn" aria-label="Show form to sign up for exclusive coupons">
                        <svg width="560" height="560" viewBox="0 0 560 560" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M509.291 153.408L285.291 25.408C282.006 23.531 277.995 23.531 274.71 25.408L50.71 153.408C47.382 155.307 45.334 158.848 45.334 162.667V397.334C45.334 401.153 47.382 404.694 50.71 406.593L274.71 534.593C276.353 535.532 278.166 536.001 280.001 536.001C281.836 536.001 283.649 535.532 285.292 534.593L509.292 406.593C512.62 404.694 514.668 401.153 514.668 397.334V162.667C514.667 158.848 512.619 155.307 509.291 153.408Z" fill="#FF8B60"/>
                            <path className="container__btn__outline" d="M525.267 199.336L525.269 199.338C527.102 200.874 527.969 203.28 527.545 205.628C527.545 205.629 527.544 205.629 527.544 205.629L485.747 436.543C485.322 438.891 483.667 440.84 481.412 441.637L481.409 441.638L238.192 527.693C237.071 528.09 235.91 528.175 234.782 527.971C233.654 527.767 232.596 527.28 231.686 526.515H231.685L34.0659 360.664L34.064 360.663C32.2309 359.126 31.3647 356.72 31.7897 354.372L73.5875 123.458C74.0125 121.11 75.6671 119.16 77.9225 118.363L77.9249 118.363L321.142 32.3072C323.373 31.5177 325.835 31.9633 327.648 33.4849C327.648 33.4849 327.648 33.4849 327.648 33.485L525.267 199.336Z" stroke="white" strokeWidth="8"/>
                            <path d="M142.967 272.85V280H113.157V241.5H142.252V248.65H122.012V257.01H139.887V263.94H122.012V272.85H142.967ZM176.686 280L167.391 266.635L158.261 280H148.031L162.276 260.42L148.746 241.5H158.866L167.721 253.985L176.411 241.5H186.036L172.616 260.09L186.971 280H176.686ZM211.472 280.66C207.549 280.66 203.992 279.817 200.802 278.13C197.649 276.407 195.155 274.042 193.322 271.035C191.525 267.992 190.627 264.563 190.627 260.75C190.627 256.937 191.525 253.527 193.322 250.52C195.155 247.477 197.649 245.112 200.802 243.425C203.992 241.702 207.567 240.84 211.527 240.84C214.864 240.84 217.87 241.427 220.547 242.6C223.26 243.773 225.534 245.46 227.367 247.66L221.647 252.94C219.044 249.933 215.817 248.43 211.967 248.43C209.584 248.43 207.457 248.962 205.587 250.025C203.717 251.052 202.25 252.5 201.187 254.37C200.16 256.24 199.647 258.367 199.647 260.75C199.647 263.133 200.16 265.26 201.187 267.13C202.25 269 203.717 270.467 205.587 271.53C207.457 272.557 209.584 273.07 211.967 273.07C215.817 273.07 219.044 271.548 221.647 268.505L227.367 273.785C225.534 276.022 223.26 277.727 220.547 278.9C217.834 280.073 214.809 280.66 211.472 280.66ZM236.134 241.5H245.044V272.74H264.349V280H236.134V241.5ZM288.699 280.66C283.199 280.66 278.909 279.138 275.829 276.095C272.785 273.052 271.264 268.707 271.264 263.06V241.5H280.174V262.73C280.174 269.623 283.034 273.07 288.754 273.07C291.54 273.07 293.667 272.245 295.134 270.595C296.6 268.908 297.334 266.287 297.334 262.73V241.5H306.134V263.06C306.134 268.707 304.594 273.052 301.514 276.095C298.47 279.138 294.199 280.66 288.699 280.66ZM330.339 280.66C327.295 280.66 324.344 280.257 321.484 279.45C318.66 278.607 316.387 277.525 314.664 276.205L317.689 269.495C319.339 270.705 321.3 271.677 323.574 272.41C325.847 273.143 328.12 273.51 330.394 273.51C332.924 273.51 334.794 273.143 336.004 272.41C337.214 271.64 337.819 270.632 337.819 269.385C337.819 268.468 337.452 267.717 336.719 267.13C336.022 266.507 335.105 266.012 333.969 265.645C332.869 265.278 331.365 264.875 329.459 264.435C326.525 263.738 324.124 263.042 322.254 262.345C320.384 261.648 318.77 260.53 317.414 258.99C316.094 257.45 315.434 255.397 315.434 252.83C315.434 250.593 316.039 248.577 317.249 246.78C318.459 244.947 320.274 243.498 322.694 242.435C325.15 241.372 328.139 240.84 331.659 240.84C334.115 240.84 336.517 241.133 338.864 241.72C341.21 242.307 343.264 243.15 345.024 244.25L342.274 251.015C338.717 248.998 335.16 247.99 331.604 247.99C329.11 247.99 327.259 248.393 326.049 249.2C324.875 250.007 324.289 251.07 324.289 252.39C324.289 253.71 324.967 254.7 326.324 255.36C327.717 255.983 329.825 256.607 332.649 257.23C335.582 257.927 337.984 258.623 339.854 259.32C341.724 260.017 343.319 261.117 344.639 262.62C345.995 264.123 346.674 266.158 346.674 268.725C346.674 270.925 346.05 272.942 344.804 274.775C343.594 276.572 341.76 278.002 339.304 279.065C336.847 280.128 333.859 280.66 330.339 280.66ZM355.512 241.5H364.422V280H355.512V241.5ZM413.109 241.5L396.444 280H387.644L371.034 241.5H380.659L392.374 269L404.254 241.5H413.109ZM448.883 272.85V280H419.073V241.5H448.168V248.65H427.928V257.01H445.803V263.94H427.928V272.85H448.883ZM147.008 347.66C143.085 347.66 139.528 346.817 136.338 345.13C133.185 343.407 130.691 341.042 128.858 338.035C127.061 334.992 126.163 331.563 126.163 327.75C126.163 323.937 127.061 320.527 128.858 317.52C130.691 314.477 133.185 312.112 136.338 310.425C139.528 308.702 143.103 307.84 147.063 307.84C150.4 307.84 153.406 308.427 156.083 309.6C158.796 310.773 161.07 312.46 162.903 314.66L157.183 319.94C154.58 316.933 151.353 315.43 147.503 315.43C145.12 315.43 142.993 315.962 141.123 317.025C139.253 318.052 137.786 319.5 136.723 321.37C135.696 323.24 135.183 325.367 135.183 327.75C135.183 330.133 135.696 332.26 136.723 334.13C137.786 336 139.253 337.467 141.123 338.53C142.993 339.557 145.12 340.07 147.503 340.07C151.353 340.07 154.58 338.548 157.183 335.505L162.903 340.785C161.07 343.022 158.796 344.727 156.083 345.9C153.37 347.073 150.345 347.66 147.008 347.66ZM189.509 347.66C185.513 347.66 181.901 346.798 178.674 345.075C175.484 343.352 172.973 340.987 171.139 337.98C169.343 334.937 168.444 331.527 168.444 327.75C168.444 323.973 169.343 320.582 171.139 317.575C172.973 314.532 175.484 312.148 178.674 310.425C181.901 308.702 185.513 307.84 189.509 307.84C193.506 307.84 197.099 308.702 200.289 310.425C203.479 312.148 205.991 314.532 207.824 317.575C209.658 320.582 210.574 323.973 210.574 327.75C210.574 331.527 209.658 334.937 207.824 337.98C205.991 340.987 203.479 343.352 200.289 345.075C197.099 346.798 193.506 347.66 189.509 347.66ZM189.509 340.07C191.783 340.07 193.836 339.557 195.669 338.53C197.503 337.467 198.933 336 199.959 334.13C201.023 332.26 201.554 330.133 201.554 327.75C201.554 325.367 201.023 323.24 199.959 321.37C198.933 319.5 197.503 318.052 195.669 317.025C193.836 315.962 191.783 315.43 189.509 315.43C187.236 315.43 185.183 315.962 183.349 317.025C181.516 318.052 180.068 319.5 179.004 321.37C177.978 323.24 177.464 325.367 177.464 327.75C177.464 330.133 177.978 332.26 179.004 334.13C180.068 336 181.516 337.467 183.349 338.53C185.183 339.557 187.236 340.07 189.509 340.07ZM237.126 347.66C231.626 347.66 227.336 346.138 224.256 343.095C221.212 340.052 219.691 335.707 219.691 330.06V308.5H228.601V329.73C228.601 336.623 231.461 340.07 237.181 340.07C239.967 340.07 242.094 339.245 243.561 337.595C245.027 335.908 245.761 333.287 245.761 329.73V308.5H254.561V330.06C254.561 335.707 253.021 340.052 249.941 343.095C246.897 346.138 242.626 347.66 237.126 347.66ZM282.78 308.5C286.19 308.5 289.142 309.068 291.635 310.205C294.165 311.342 296.109 312.955 297.465 315.045C298.822 317.135 299.5 319.61 299.5 322.47C299.5 325.293 298.822 327.768 297.465 329.895C296.109 331.985 294.165 333.598 291.635 334.735C289.142 335.835 286.19 336.385 282.78 336.385H275.025V347H266.115V308.5H282.78ZM282.285 329.125C284.962 329.125 286.997 328.557 288.39 327.42C289.784 326.247 290.48 324.597 290.48 322.47C290.48 320.307 289.784 318.657 288.39 317.52C286.997 316.347 284.962 315.76 282.285 315.76H275.025V329.125H282.285ZM327.793 347.66C323.797 347.66 320.185 346.798 316.958 345.075C313.768 343.352 311.257 340.987 309.423 337.98C307.627 334.937 306.728 331.527 306.728 327.75C306.728 323.973 307.627 320.582 309.423 317.575C311.257 314.532 313.768 312.148 316.958 310.425C320.185 308.702 323.797 307.84 327.793 307.84C331.79 307.84 335.383 308.702 338.573 310.425C341.763 312.148 344.275 314.532 346.108 317.575C347.942 320.582 348.858 323.973 348.858 327.75C348.858 331.527 347.942 334.937 346.108 337.98C344.275 340.987 341.763 343.352 338.573 345.075C335.383 346.798 331.79 347.66 327.793 347.66ZM327.793 340.07C330.067 340.07 332.12 339.557 333.953 338.53C335.787 337.467 337.217 336 338.243 334.13C339.307 332.26 339.838 330.133 339.838 327.75C339.838 325.367 339.307 323.24 338.243 321.37C337.217 319.5 335.787 318.052 333.953 317.025C332.12 315.962 330.067 315.43 327.793 315.43C325.52 315.43 323.467 315.962 321.633 317.025C319.8 318.052 318.352 319.5 317.288 321.37C316.262 323.24 315.748 325.367 315.748 327.75C315.748 330.133 316.262 332.26 317.288 334.13C318.352 336 319.8 337.467 321.633 338.53C323.467 339.557 325.52 340.07 327.793 340.07ZM393.615 308.5V347H386.3L367.105 323.625V347H358.305V308.5H365.675L384.815 331.875V308.5H393.615ZM418.124 347.66C415.08 347.66 412.129 347.257 409.269 346.45C406.445 345.607 404.172 344.525 402.449 343.205L405.474 336.495C407.124 337.705 409.085 338.677 411.359 339.41C413.632 340.143 415.905 340.51 418.179 340.51C420.709 340.51 422.579 340.143 423.789 339.41C424.999 338.64 425.604 337.632 425.604 336.385C425.604 335.468 425.237 334.717 424.504 334.13C423.807 333.507 422.89 333.012 421.754 332.645C420.654 332.278 419.15 331.875 417.244 331.435C414.31 330.738 411.909 330.042 410.039 329.345C408.169 328.648 406.555 327.53 405.199 325.99C403.879 324.45 403.219 322.397 403.219 319.83C403.219 317.593 403.824 315.577 405.034 313.78C406.244 311.947 408.059 310.498 410.479 309.435C412.935 308.372 415.924 307.84 419.444 307.84C421.9 307.84 424.302 308.133 426.649 308.72C428.995 309.307 431.049 310.15 432.809 311.25L430.059 318.015C426.502 315.998 422.945 314.99 419.389 314.99C416.895 314.99 415.044 315.393 413.834 316.2C412.66 317.007 412.074 318.07 412.074 319.39C412.074 320.71 412.752 321.7 414.109 322.36C415.502 322.983 417.61 323.607 420.434 324.23C423.367 324.927 425.769 325.623 427.639 326.32C429.509 327.017 431.104 328.117 432.424 329.62C433.78 331.123 434.459 333.158 434.459 335.725C434.459 337.925 433.835 339.942 432.589 341.775C431.379 343.572 429.545 345.002 427.089 346.065C424.632 347.128 421.644 347.66 418.124 347.66Z" fill="white"/>
                        </svg>
                    </button>
                </div> */}
            <div className="accordion">
                <div className="accordion__form__btn control--checkbox">
                    <input
                        id="getCoupons"
                        aria-label="Check box to recieve exclusive Stormwell coupons"
                        type="checkbox"
                        onClick={() => openAccordion()}
                    />
                    <label htmlFor="getCoupons">Yes! I want to receive exclusive Stormwell coupons to my email!</label>
                </div>

                <form className={`accordion__form${checked ? ' active': ''}`} ref={el  => {formEl = el}} onSubmit={handleFormValidation}>
                    <div className="accordion__form__control control--name">
                        <span>Name:</span>
                        <input
                            placeholder="John Appleseed"
                            aria-label="Enter name here"
                            type="text"
                        />
                        <small />
                    </div>
                    <div className="accordion__form__control control--email">
                        <span>Email:</span>
                        <input
                            placeholder="emailaddress@email.com"
                            aria-label="Enter email here"
                            type="email"
                        />
                        <small />
                    </div>
                    <div className="accordion__form__control control--birthday" onBlur={ageCheck}>
                        <span>Birthday:</span>
                        <input
                            aria-label="Input to enter day of month of birthday"
                            placeholder="DD"
                            type="number"
                            min="1" max="31"
                            onChange={e => setBirthday(e.target.value)}
                        />
                        <select
                            aria-label="Select which month you were born"
                            defaultValue={'MM'}
                            onChange={e => setBirthmonth(e.target.value)}
                        >
                            <option value="MM" disabled>MM</option>
                            <option value="01">January</option>
                            <option value="02">February</option>
                            <option value="03">March</option>
                            <option value="04">April</option>
                            <option value="05">May</option>
                            <option value="06">June</option>
                            <option value="07">July</option>
                            <option value="08">August</option>
                            <option value="09">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                        <input
                            aria-label="Input for birth year"
                            placeholder="YYYY"
                            type="number"
                            min="1900" max={new Date().getFullYear()}
                            onChange={e => setBirthyear(e.target.value)}
                        />
                        <small />
                    </div>
                    <button type="submit">Go!</button>
                </form>

            </div>
        </section>
    )
}

export default Contact