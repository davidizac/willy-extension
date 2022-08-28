import { createGlobalStyle } from 'styled-components'

export const AnimationsStyle = createGlobalStyle`
@keyframes slide-up {
  from {
      transform: translateY(var(--experience-bar-height));
  }
  to {
      transform: "";
  }
}

@keyframes fade-in {
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
}

@keyframes slide {
  from {
      transform: translateX(var(--sidemenu-width));
  }
  to {
      transform: "";
  }
}

@keyframes slide-out {
  from {
      transform: ""
  }
  to {
      transform: translateX(var(--sidemenu-width));
  }
}

@keyframes label-slide-up {
  from {
      opacity: 0;
      transform: translate(-50%, -100%);
  }
  to {
      opacity: 1;
      transform: "";
  }
}

@keyframes label-slide-down {
  from {
      opacity: 0;
      transform: translate(-50%, 100%);
  }
  to {
      opacity: 1;
      transform: "";
  }
}

@keyframes popup-animation {
  from {
      opacity: 0;
      transform: translateY(20px);
  }
  to {
      opacity: 1;
      transform: translateY(0px);
  }
}

@keyframes popup-hide-animation {
  from {
      opacity: 1;
      transform: translateY(0px);
  }
  to {
      opacity: 0;
      transform: translateY(-20px);
  }
}

@keyframes scale-out {
  from {
      transform: scale(0);
  }
  to {
      transform: "";
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes large-sidemenu-slide {
  from {
      transform: translateX(400px);
  }
  to {
      transform: "";
  }
}

@keyframes large-sidemenu-slide-out {
  from {
      transform: translate(0px)
  }
  to {
      transform: translateX(450px);
  }
}

@keyframes bounce {
  0%, 80%, 100% { 
      transform: scale(0);
  } 40% { 
      transform: scale(1.0);
  }
}

@keyframes blink {
  to {
      visibility: hidden;
  }
}

@keyframes slide-in {
  from {
      transform: translateY(-20px);
      opacity: 0;
  }
  to {
      transform: "";
      opacity: 1;
  }
}

/* Template Editor Animations */

@keyframes navigation-slide-down {
  from {
      transform: translate(-50%, -100%);
  }
  to {
      transform: "";
  }
}

@keyframes widget-slide-left {
  from {
      transform: translateX(calc(-1 * var(--template-settings-widget-width)));
  }
  to {
      transform: "";
  }
}

@keyframes widget-slide-right {
  from {
      transform: translateX(var(--template-settings-widget-width));
  }
  to {
      transform: "";
  }
}

@keyframes expand-down {
  from {
      margin-top: -20px;
      opacity: 0;
      visibility: hidden;
  }
  to {
      margin-top: "";
      opacity: 1;
      visibility: visible;
  }
}
@keyframes contract-up {
  from {
      height: 100px;
  }
  to {
      transform: 0px;
  }
}

@-webkit-keyframes willy-pulse {

  0%,
  100% {
      -webkit-transform: scale(0.8);
      -ms-transform: scale(0.8);
      transform: scale(0.8);
      opacity: 0.2;
  }

  50% {
      -webkit-transform: scale(0.9);
      -ms-transform: scale(0.9);
      transform: scale(0.9);
      opacity: 0.3;
  }
}

@keyframes willy-pulse {

  0%,
  100% {
      -webkit-transform: scale(0.8);
      -ms-transform: scale(0.8);
      transform: scale(0.8);
      opacity: 0.2;
  }

  50% {
      -webkit-transform: scale(0.9);
      -ms-transform: scale(0.9);
      transform: scale(0.9);
      opacity: 0.3;
  }
}

@keyframes pulse-dot {
  0% {
    transform: scale(1, 1) translate(-50%, -50%);
  }
 
  30%{
    transform: scale(1.25, 1.25) translate(-40%, -40%);
  }
  
  100% {
    transform: scale(1, 1) translate(-50%, -50%);
  }
}

@-webkit-keyframes pulse-ring {
  0% {
    -webkit-transform: scale(1, 1);
    opacity: 0;
  }
 
  25%{
    opacity: .5;
  }
  
  100% {
    -webkit-transform: scale(1.8, 1.8);
    opacity: 0;
  }
}
@keyframes pulse-ring {
  0% {
    transform: scale(1, 1);
    opacity: 0;
  }
 
  25%{
    opacity: .5;
  }
  
  100% {
    transform: scale(1.8, 1.8);
    opacity: 0;
  }
}

@-webkit-keyframes loading {
  0% {
      border: 0px solid white;
  }
  20% {
      border: 1px solid white; 
      width: 0%; 
      height: 0%;
  }
  100% {
      border: 1px solid white; 
      width: 100%; 
      height: 100%;
  }
}

@keyframes loading {
  0% {
      border: 0px solid white;
  }
 20% {
     border: 2px solid white; 
     width: 0%; 
     height: 0%;
  }
 100% {
     border: 2px solid white; 
     width: 100%; 
     height: 100%;
  }
}


@keyframes target {
  0% {
    transform: rotateZ(0) scale(0.6);
  }
  50% {
    transform: rotateZ(180deg) scale(1);
  }
  100% {
    transform: rotateZ(360deg) scale(0.6);
  }
}

@keyframes egg {
  from {
      box-shadow: inset 0 0 8px 3px currentColor;
  }
  to {
      box-shadow: inset 0 0 4px 1px currentColor;
  }
}

@keyframes morph {
  0% {
    transform: rotateZ(0);
    border-radius: 20%;
  }
  50% {
    transform: rotateZ(45deg);
    border-radius: 50%;
  }
  100% {
    transform: rotateZ(90deg);
    border-radius: 20%;
  }
}

`
