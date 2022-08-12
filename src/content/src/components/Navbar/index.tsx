import React from 'react';
import './style.css'

export default function NavBar() {  
  return (

    <div className="willy theme-dark">
      <div id="template-editor"><iframe id="tool-editor" style={{display: 'none'}}>
        </iframe></div>
      <div id="window-container" style={{opacity: 1}}><div id="willy-template-settings" className="willy-sidebar settings-slide-right" style={{display: 'none', transform: 'translateX(0px)'}}>
          <div className="sidebar-controller flex-end">
            <span id="move-sidebar" className="willy-hoverable-icon" label-bottom><svg width={13} height={11} viewBox="0 0 13 11" fill="#C2CBD0" style={{cursor: 'pointer'}} xmlns="http://www.w3.org/2000/svg">        <path fillRule="evenodd" clipRule="evenodd" d="M5.46969 4.78601L5.46969 2.73487L2.73484 5.46972L5.46969 8.20457V6.15343H12.3068V4.78601H5.46969ZM-1.33514e-05 10.9394H1.36741V0H-1.33514e-05V10.9394Z" />      </svg></span>
            <span id="close-sidebar" className="willy-hoverable-icon" label-bottom><svg width={9} height={10} viewBox="0 0 9 10" fill="#C2CBD0" style={{cursor: 'pointer'}} xmlns="http://www.w3.org/2000/svg">        <path d="M9 1.84585L8.09357 0.939423L4.5 4.53299L0.906429 0.939423L0 1.84585L3.59357 5.43942L0 9.03299L0.906429 9.93942L4.5 6.34585L8.09357 9.93942L9 9.03299L5.40643 5.43942L9 1.84585Z" />      </svg></span>
          </div>
          <div className="sidebar-header">
            <span className="willy-header">Driven Action Settings</span>
          </div>
          <div id="template-controller" className="flex-space-between">
            <div className="flex-space-between">
              <span className="step-controller willy-hoverable-icon" ><svg width={5} height={8} viewBox="0 0 5 8" fill="#C2CBD0" style={{cursor: 'pointer'}} xmlns="http://www.w3.org/2000/svg">        <path d="M4.04858 0L5 0.94L1.90958 4L5 7.06L4.04858 8L0 4L4.04858 0Z" />      </svg></span>
              <div><span id="step-index" /> OF <span id="step-sum" /> <span id="step-word" /></div>
              <span className="step-controller willy-hoverable-icon" ><svg width={5} height={8} viewBox="0 0 5 8" fill="#C2CBD0" style={{cursor: 'pointer'}} xmlns="http://www.w3.org/2000/svg">        <path d="M0.951417 0L0 0.94L3.09042 4L0 7.06L0.951417 8L5 4L0.951417 0Z" />      </svg></span>
            </div>
          </div>
          <div id="individual-grp-switch" className="sidebar-view-switch">
            <div id="individual-switch" className="on" >INDIVIDUAL</div>
            <div id="group-switch" >GROUP</div>
          </div>
          <div id="template-current-settings"><div id="driven-settings">
              <div className="main-option">
                <div>UI PATTERN</div>
                <div id="tooltip-type-select" className="willy-select" ><div className="element-value">
                    <svg className="driven-icon" width={26} height={20} viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width={21} height="12.1579" rx={1} fill="white" />
                      <rect x="3.31592" y="3.40076" width="14.3684" height="1.65789" rx="0.828947" fill="#ACB5BD" />
                      <rect x="3.31592" y="6.71643" width="6.63158" height="1.65789" rx="0.828947" fill="#ACB5BD" />
                      <path d="M25.5547 14.9093H22.9026L24.2984 18.3623C24.3956 18.6016 24.2845 18.87 24.0623 18.9716L22.8332 19.5157C22.604 19.6172 22.3471 19.5012 22.2499 19.269L20.9235 15.9902L18.7569 18.2534C18.4682 18.555 18 18.3225 18 17.927V7.01723C18 6.60082 18.498 6.39782 18.7569 6.69081L25.8672 14.1186C26.154 14.4025 25.9424 14.9093 25.5547 14.9093Z" fill="#D1D3D6" />
                    </svg>
                    Driven Action
                  </div></div>
              </div>
              <div id="template-size-settings" className="flex-space-between main-option">
                <div className="willy-checkbox">
                  <input id="template-full-width-checkbox" type="checkbox"  defaultChecked />
                  <label htmlFor="template-full-width-checkbox">Full Width</label>
                </div>
                <div className="settings-slider" id="{id}" action-on=".willy-slide" json-setting="individual-width" property="template-width">
                  <div className="flex-space-between mini-row">
                    <div>Width</div>
                    <div className="slider-input flex-start">
                      <div className="flex-center">W</div>
                      <input type="number" step="{step}" max={440} min={240} />
                      <div />
                    </div>
                    <div className="additional-info" />
                  </div>
                  <input type="range" step="{step}" max={440} min={240} style={{background: 'linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) 30%, var(--color-slider-background) 30%, var(--color-slider-background) 100%)'}} />
                </div>
              </div>
              <div id="timed-delay-setting" className="main-option toggleable-row expandable-row">
                <div className="expanding-option settings-row">
                  <div className="willy-toggle {toggleClass}" json-setting="individual-delay-status">
                    <label>
                      <input type="checkbox" id="timed-delay-checkbox" />
                      <span className="slider" />
                      <label htmlFor="timed-delay-checkbox">Timed Delay</label>
                    </label>
                  </div>
                  <div className="settings-arrow inline">
                    <svg width={7} height={12} viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">        <path d="M0.951417 0L0 0.94L3.09042 4L0 7.06L0.951417 8L5 4L0.951417 0Z" fill="#C2CBD0" />      </svg>
                  </div>
                </div>
                <div>
                  <div className="expandable-options">
                    <div className="settings-raw-input flex-space-between" json-setting="individual-delay-duration">
                      <div>Delay</div>
                      <div className="slider-input flex-start">
                        <div className="flex-center">S</div>
                        <input type="number" max={10} min={0} />
                        <div className="input-unit" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="action-settings" className="main-option not-optional expandable-row">
                <div className="settings-row">
                  <div>Action</div>
                  <div className="settings-arrow inline" >
                    <svg width={7} height={12} viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">        <path d="M0.951417 0L0 0.94L3.09042 4L0 7.06L0.951417 8L5 4L0.951417 0Z" fill="#C2CBD0" />      </svg>
                  </div>
                </div>
                <div>
                  <div className="expandable-options">
                    <div className="flex-space-between">
                      <div>Type</div>
                      <div id="action-type" className="willy-select"><div className="element-value">
                          <div><svg width={11} height={15} viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">        <path d="M10.9041 7.29292C10.1825 6.48833 9.22046 5.93783 8.2183 5.72609C7.77734 5.59905 7.33639 5.51436 6.89544 5.47201C8.01786 4.07458 7.81743 1.95725 6.49457 0.77154C5.17171 -0.414165 3.16738 -0.202432 2.04495 1.19501C0.922529 2.59244 1.12296 4.70977 2.44582 5.89548C2.68634 6.10721 2.92686 6.2766 3.16738 6.36129V7.29292L2.52599 6.65772C1.96478 6.06487 1.04279 6.06487 0.441489 6.65772C-0.119723 7.25057 -0.15981 8.1822 0.401403 8.77505L2.24539 11.0618C2.32556 11.6546 2.52599 12.2051 2.8066 12.7133C3.00703 13.0944 3.28764 13.4755 3.56825 13.7719V14.5765C3.56825 14.8306 3.72859 15 3.96911 15H9.4209C9.62133 15 9.82176 14.7883 9.82176 14.5765V13.4755C10.5834 12.5016 10.9843 11.2735 10.9843 10.0454V7.58934C11.0244 7.41996 10.9843 7.33527 10.9041 7.29292ZM2.08504 3.31234C2.08504 1.9149 3.16738 0.813887 4.49024 0.856233C5.8131 0.856233 6.85535 1.99959 6.81526 3.39703C6.81526 4.15927 6.49457 4.83681 5.93336 5.30263V3.1853C5.91289 2.81831 5.7603 2.47349 5.50689 2.22154C5.25347 1.96958 4.91842 1.82957 4.57041 1.83021C3.84885 1.78786 3.20747 2.42306 3.20747 3.1853V5.38732C2.52599 4.96385 2.12513 4.15927 2.08504 3.31234ZM10.2226 10.0031C10.2627 11.1041 9.90194 12.1628 9.22046 13.0097C9.14029 13.0944 9.06011 13.1791 9.06011 13.3061V14.1954H4.41007V13.6026C4.41007 13.4755 4.32989 13.3485 4.24972 13.2638C3.96911 13.0097 3.72859 12.7133 3.52816 12.3322C3.28764 11.9087 3.12729 11.4005 3.04712 10.8924C3.04712 10.8077 3.00703 10.723 2.96695 10.6383L1.04279 8.22454C0.922529 8.0975 0.842356 7.92812 0.842356 7.71638C0.842356 7.547 0.922529 7.33526 1.04279 7.20822C1.3234 6.95415 1.72426 6.95415 2.00487 7.20822L3.16738 8.43628V9.70667L3.92903 9.28321V3.1853C3.96911 2.88887 4.20963 2.63479 4.53033 2.67714C4.81093 2.67714 5.09154 2.88887 5.09154 3.1853V8.05516L5.89327 8.22454V6.2766C5.93336 6.23425 5.97344 6.23425 6.01353 6.19191C6.29414 6.19191 6.57474 6.23425 6.85535 6.2766V8.43628L7.49674 8.56332V6.36129L7.97778 6.48833C8.17821 6.53068 8.37864 6.61537 8.57908 6.70007V8.8174L9.22046 8.94444V6.99649C9.58124 7.16588 9.90193 7.41996 10.1825 7.71638L10.2226 10.0031Z" fill="#C2CBD0" />      </svg></div>
                          <div>Click</div>
                        </div></div>
                    </div>
                    <div id="click-type-options" className="section" style={{}}>
                      <div className="flex-column-3">
                        <div>Behavior</div>
                        <div action-type={1} className="willy-select action-behavior-select"><div className="text-value">Click on the selected element</div></div>
                      </div>
                      <div id="click-action-element-display" className="flex-space-between" style={{display: 'none'}}>
                        <div id="click-action-element"> </div>
                        <div id="click-action-element-retarget" className="btn-style1">
                          <span>SELECT</span>
                          <span><svg width={15} height={14} viewBox="0 0 15 14" fill="#A3B0B8" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M13.0164 6.17046C12.7326 3.59738 10.6902 1.55496 8.11708 1.27111V0H6.88298V1.27111C4.3099 1.55496 2.26748 3.59738 1.98364 6.17046H0.712524V7.40455H1.98364C2.26748 9.97763 4.3099 12.02 6.88298 12.3039V13.575H8.11708V12.3039C10.6902 12.02 12.7326 9.97763 13.0164 7.40455H14.2875V6.17046H13.0164ZM7.50004 4.31933C6.13637 4.31933 5.03185 5.42384 5.03185 6.78751C5.03185 8.15118 6.13637 9.25569 7.50004 9.25569C8.86371 9.25569 9.96822 8.15118 9.96822 6.78751C9.96822 5.42384 8.86371 4.31933 7.50004 4.31933ZM3.18071 6.7875C3.18071 9.17547 5.11207 11.1068 7.50004 11.1068C9.88801 11.1068 11.8194 9.17547 11.8194 6.7875C11.8194 4.39954 9.88801 2.46818 7.50004 2.46818C5.11207 2.46818 3.18071 4.39954 3.18071 6.7875Z" />
                            </svg></span>
                        </div>
                      </div>
                    </div>
                    <div id="input-type-options" className="section" style={{display: 'none'}}>
                      <div action-type={6} className="willy-select action-behavior-select"><div className="text-value">Show 'next' button when user inputs a text</div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="element-settings" className="main-option not-optional expandable-row">
                <div className="settings-row">
                  <div>Element</div>
                  <div className="settings-arrow inline">
                    <svg width={7} height={12} viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">        <path d="M0.951417 0L0 0.94L3.09042 4L0 7.06L0.951417 8L5 4L0.951417 0Z" fill="#C2CBD0" />      </svg>
                  </div>
                </div>
                <div>
                  <div className="expandable-options">
                    <div className="willy-checkbox" json-setting="individual-skipToolAndContinueFlow">
                      <label><input type="checkbox" />Continue flow if element does not exist</label>
                    </div>
                    <div id="detection-type" className="radio-options-section">
                      <div className="willy-radio">
                        <input id="auto-radio" type="radio"  name="detection-radio" defaultChecked />
                        <label htmlFor="auto-radio">Auto</label>
                      </div>
                      <div className="willy-radio">
                        <input id="manual-radio" type="radio"  name="detection-radio" />
                        <label htmlFor="manual-radio">Manual</label>
                      </div>
                    </div>
                    <div id="auto-detection-settings" style={{}}>
                      <div className="flex-column-3">
                        <div>Element</div>
                        <div id="element-parent-selector" className="willy-select" ><div className="text-value">Element DIV</div></div>
                      </div>
                    </div>
                    <div id="manual-detection-settings" className="section" style={{display: 'none'}}>
                      <div id="element-finder-status" >
                        <div className="flex-start-space" >
                          <span><svg width={12} height={12} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">        <path d="M4 0C1.7944 0 0 1.7944 0 4C0 6.2056 1.7944 8 4 8C6.2056 8 8 6.2056 8 4C8 1.7944 6.2056 0 4 0ZM3.2004 5.7652L1.7152 4.2832L2.28 3.7168L3.1996 4.6348L5.3172 2.5172L5.8828 3.0828L3.2004 5.7652Z" fill="#79A93B" />      </svg></span>
                          <span>Selector is unique and valid</span>
                        </div>
                        <div className="flex-start-space">
                          <div id="manual-detection-loader" className="willy-load">
                            <div />
                          </div>
                          <span>Finding element</span>
                        </div>
                        <div className="flex-start-space" >
                          <span>X</span>
                          <span>Could not find element</span>
                        </div>
                      </div>
                      <div>SELECTORS</div>
                      <div id="manual-selectors" className="section">
                        {/* auto generated */}
                      </div>
                      <div id="selector-text" className="willy-text-area" contentEditable="true" />
                      <div className="flex-space-between">
                        <div>ELEMENT ORDER</div>
                        <div className="flex-space-between">
                          <input id="element-order" type="number" min={1} max={0} />
                          <span> / 0</span>
                        </div>
                      </div>
                      <div id="text-include-settings" className="main-option inner-expand">
                        <div className="flex-space-between">
                          <div>TEXT INCLUDE</div>
                          <div className="willy-toggle willy-toggle-secondary" json-setting>
                            <label>
                              <input type="checkbox" id="text-include-checkbox" />
                              <span className="slider" />
                              <label htmlFor="text-include-checkbox" />
                            </label>
                          </div>
                        </div>
                        <div>
                          <div className="expandable-options">
                            <div id="text-include-text" className="willy-text-area" contentEditable="true" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="placement-settings" className="main-option not-optional expandable-row">
                <div className="settings-row">
                  <div>Placement</div>
                  <div className="settings-arrow inline">
                    <svg width={7} height={12} viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">        <path d="M0.951417 0L0 0.94L3.09042 4L0 7.06L0.951417 8L5 4L0.951417 0Z" fill="#C2CBD0" />      </svg>
                  </div>
                </div>
                <div>
                  <div className="expandable-options">
                    <div id="default-placement-container" className="willy-checkbox">
                      <input type="checkbox" id="default-placement" />
                      <label htmlFor="default-placement">Default Positioning</label>
                    </div>
                    <div id="manual-placement">
                      <div className="horizontal-position">
                        <div className="position-node" />
                        <div className="line" />
                        <div className="position-node"/>
                        <div className="line" />
                        <div className="position-node"/>
                      </div>
                      <div className="flex-space-between">
                        <div className="vertical-position">
                          <div className="position-node" />
                          <div className="line" />
                          <div className="position-node"/>
                          <div className="line" />
                          <div className="position-node" />
                        </div>
                        <div id="placement-box">
                          <span>Always show from the <span id="position-text">default position</span></span>
                        </div>
                        <div className="vertical-position">
                          <div className="position-node" />
                          <div className="line" />
                          <div className="position-node"/>
                          <div className="line" />
                          <div className="position-node" />
                        </div>
                      </div>
                      <div className="horizontal-position">
                        <div className="position-node" />
                        <div className="line" />
                        <div className="position-node"/>
                        <div className="line" />
                        <div className="position-node"/>
                      </div>
                    </div>
                    <div id="reselect-tooltip-target" className="btn-style1">
                      <span><svg width={15} height={14} viewBox="0 0 15 14" fill="#A3B0B8" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M13.0164 6.17046C12.7326 3.59738 10.6902 1.55496 8.11708 1.27111V0H6.88298V1.27111C4.3099 1.55496 2.26748 3.59738 1.98364 6.17046H0.712524V7.40455H1.98364C2.26748 9.97763 4.3099 12.02 6.88298 12.3039V13.575H8.11708V12.3039C10.6902 12.02 12.7326 9.97763 13.0164 7.40455H14.2875V6.17046H13.0164ZM7.50004 4.31933C6.13637 4.31933 5.03185 5.42384 5.03185 6.78751C5.03185 8.15118 6.13637 9.25569 7.50004 9.25569C8.86371 9.25569 9.96822 8.15118 9.96822 6.78751C9.96822 5.42384 8.86371 4.31933 7.50004 4.31933ZM3.18071 6.7875C3.18071 9.17547 5.11207 11.1068 7.50004 11.1068C9.88801 11.1068 11.8194 9.17547 11.8194 6.7875C11.8194 4.39954 9.88801 2.46818 7.50004 2.46818C5.11207 2.46818 3.18071 4.39954 3.18071 6.7875Z" />
                        </svg></span>
                      <span>RESELECT ELEMENT</span>
                    </div>
                    <div className="settings-slider" id="{id}" action-on="#content-container, .driven-action-hotspot #willy-pulse" json-setting="individual-placement-margin-left" property="marginLeft">
                      <div className="flex-space-between mini-row">
                        <div>Left</div>
                        <div className="slider-input flex-start">
                          <div className="flex-center">L</div>
                          <input type="number" step="{step}" max={30} min={-30} />
                          <div />
                        </div>
                        <div className="additional-info" />
                      </div>
                      <input type="range" step="{step}" max={30} min={-30} style={{background: 'linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) 50%, var(--color-slider-background) 50%, var(--color-slider-background) 100%)'}} />
                    </div>
                    <div className="settings-slider" id="{id}" action-on="#content-container, .driven-action-hotspot #willy-pulse" json-setting="individual-placement-margin-top" property="marginTop">
                      <div className="flex-space-between mini-row">
                        <div>Top</div>
                        <div className="slider-input flex-start">
                          <div className="flex-center">T</div>
                          <input type="number" step="{step}" max={30} min={-30} />
                          <div />
                        </div>
                        <div className="additional-info" />
                      </div>
                      <input type="range" step="{step}" max={30} min={-30} style={{background: 'linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) 50%, var(--color-slider-background) 50%, var(--color-slider-background) 100%)'}} />
                    </div>
                    <div className="settings-raw-input flex-space-between" json-setting="individual-placement-zindex">
                      <div>Z-Index</div>
                      <div className="slider-input flex-start">
                        <div className="flex-center">Z</div>
                        <input type="number" />
                        <div className="input-unit" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tooltips-shared-individual-settings">
                <div id="behavior-settings" className="main-option not-optional expandable-row">
                  <div className="settings-row">
                    <div>Behavior</div>
                    <div className="settings-arrow inline">
                      <svg width={7} height={12} viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">        <path d="M0.951417 0L0 0.94L3.09042 4L0 7.06L0.951417 8L5 4L0.951417 0Z" fill="#C2CBD0" />      </svg>
                    </div>
                  </div>
                  <div>
                    <div className="expandable-options">
                      <div className="flex-column-3">
                        <div>Type</div>
                        <div id="tooltip-behavior" className="willy-select"><div className="text-value">Show only when element is visible</div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="backdrop-focus-settings" className="main-option not-optional expandable-row inactive">
                  <div className="settings-row">
                    <div>Backdrop Focus</div>
                    <div className="settings-arrow inline">
                      <svg width={7} height={12} viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">        <path d="M0.951417 0L0 0.94L3.09042 4L0 7.06L0.951417 8L5 4L0.951417 0Z" fill="#C2CBD0" />      </svg>
                    </div>
                  </div>
                  <div>
                    <div className="expandable-options">
                      <div className="flex-space-between">
                        <div>Type</div>
                        <div id="focus-type" className="willy-select"><div className="element-value">
                            <div><svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">        <path d="M1.5 6.75H0V10.5H3.75V9H1.5V6.75Z" fill="#C2CBD0" />        <path d="M0 3.75H1.5V1.5H3.75V0H0V3.75Z" fill="#C2CBD0" />        <path d="M9 9H6.75V10.5H10.5V6.75H9V9Z" fill="#C2CBD0" />        <path d="M6.75 0V1.5H9V3.75H10.5V0H6.75Z" fill="#C2CBD0" />      </svg></div>
                            <div>Hard</div>
                          </div></div>
                      </div>
                      <div className="settings-slider" id="{id}" action-on="#willy-backdrop-focus" json-setting="individual-highlighted-width" property="backdrop-focus-width">
                        <div className="flex-space-between mini-row">
                          <div>Width</div>
                          <div className="slider-input flex-start">
                            <div className="flex-center">W</div>
                            <input type="number" step="{step}" max={80} min={-10} />
                            <div />
                          </div>
                          <div className="additional-info" />
                        </div>
                        <input type="range" step="{step}" max={80} min={-10} style={{background: 'linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) 11.1111%, var(--color-slider-background) 11.1111%, var(--color-slider-background) 100%)'}} />
                      </div>
                      <div className="settings-slider" id="{id}" action-on="#willy-backdrop-focus" json-setting="individual-highlighted-height" property="backdrop-focus-height">
                        <div className="flex-space-between mini-row">
                          <div>Height</div>
                          <div className="slider-input flex-start">
                            <div className="flex-center">H</div>
                            <input type="number" step="{step}" max={80} min={-10} />
                            <div />
                          </div>
                          <div className="additional-info" />
                        </div>
                        <input type="range" step="{step}" max={80} min={-10} style={{background: 'linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) 11.1111%, var(--color-slider-background) 11.1111%, var(--color-slider-background) 100%)'}} />
                      </div>
                      <div className="settings-slider" id="{id}" action-on="#willy-backdrop-focus" json-setting="individual-highlighted-corners" property="backdrop-focus-radius">
                        <div className="flex-space-between mini-row">
                          <div>Corner Roundness</div>
                          <div className="slider-input flex-start">
                            <div className="flex-center"><svg width={10} height={12} viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">        <path fillRule="evenodd" clipRule="evenodd" d="M0 1H5C5.55228 1 6 1.44772 6 2V7H7V2C7 0.895431 6.10457 0 5 0H0V1Z" fill="#C2CBD0" />      </svg></div>
                            <input type="number" step="{step}" max={25} min={0} />
                            <div />
                          </div>
                          <div className="additional-info" />
                        </div>
                        <input type="range" step="{step}" max={25} min={0} style={{background: 'linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) 20%, var(--color-slider-background) 20%, var(--color-slider-background) 100%)'}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div></div>
        </div><div id="willy-settings-toggle" className="toggle-right" style={{display: 'none'}}>
          <div><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.63 11.71">             <path d="M7.65.28a.79.79,0,0,0-1.2,0,1,1,0,0,0,0,1.34L9.33,4.85H.85A.91.91,0,0,0,0,5.8a.9.9,0,0,0,.85,1H9.42l-3,3.34a1,1,0,0,0,0,1.34.78.78,0,0,0,1.2,0l5-5.58Z" style={{fill: '#fff'}} />           </svg></div>
          <div>
            <p>Settings</p>
          </div>
        </div></div>
      <div id="experience-builder-bar" className="flex-space-between optimize-animation">
        <div id="hide-btn">HIDE</div>
        <div id="bar-container" style={{opacity: 1}}><div id="edit-experience-bar" className="flex-space-between">
            <div className="flex-box-left"><div id="experiences-list-select" className="flex-start">
                <div id="willy-icon">
                  <svg width={34} height={33} viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">        <path d="M25.7365 0H8.26352C3.69971 0 0 3.72176 0 8.31278V24.6872C0 29.2782 3.69971 33 8.26352 33H25.7365C30.3003 33 34 29.2782 34 24.6872V8.31278C34 3.72176 30.3003 0 25.7365 0Z" fill="#EF4784" />        <path d="M10.4305 24.265C9.78745 23.5297 9.45622 22.576 9.50625 21.6038C9.52191 20.8354 9.61616 20.0707 9.78755 19.3213L11.1237 13.2213C11.1237 13.1017 11.2141 12.7927 11.3246 12.2844C11.4362 11.7366 11.4901         11.1787 11.4854 10.6199C11.503 10.3462 11.4327 10.0739 11.2845 9.84243C11.2185 9.76086 11.1341 9.69582 11.0381 9.65254C10.9421 9.60926 10.8372 9.58895 10.7319 9.59325C10.1786 9.63754 9.65241 9.84983 9.22495         10.2012C8.53084 10.7253 7.92401 11.3542 7.42665 12.0651C7.35523 12.1814 7.25693 12.2791 7.13988 12.3501C7.02282 12.4212 6.89039 12.4636 6.75355 12.4738C6.64956 12.4704 6.54789 12.4424 6.45702 12.3921C6.36615 12.3418 6.28871         12.2707 6.23114 12.1847C6.07914 12.0028 5.99724 11.7732 6.00007 11.5369C6.03792 10.9881 6.2488 10.465 6.60285 10.0418C8.06962 8.04832 9.7775 7.0516 11.7466 7.0516C12.1184 7.03563 12.4895 7.09748 12.8357 7.23314C13.1819         7.36881 13.4954 7.57524 13.7559 7.83901C14.2976 8.49222 14.564 9.32787 14.4993 10.1713C14.5027 10.8388 14.4524 11.5054 14.3486 12.1648C14.2481 12.7728 14.0773 13.61 13.8362 14.6566L12.9923 18.5737L12.8919 19.2615C12.8216         19.5904 12.7613 19.8994 12.7211 20.1884C12.681 20.4758 12.6609 20.7655 12.6608 21.0556C12.638 21.4536 12.7753 21.8443 13.0426 22.142C13.1864 22.282 13.358 22.3907 13.5466 22.461C13.7352 22.5314 13.9365 22.5619 14.1376         22.5506C14.6451 22.5111 15.1393 22.3697 15.59 22.135C16.0407 21.9003 16.4387 21.5771 16.7597 21.1851C17.8584 19.8854 18.691 18.3856 19.211 16.7697C20.0717 14.2355 20.6479 11.6149 20.929 8.95534C20.9687 8.42537 21.1192 7.90941         21.371 7.44032C21.5088 7.28018 21.6851 7.157 21.8834 7.08211C22.0818 7.00722 22.296 6.98302 22.5063 7.01173C22.7144 6.99633 22.9233 7.02879 23.1167 7.10658C23.3101 7.18438 23.4828 7.30541 23.6214 7.46026C23.8963 7.90805 24.0097         8.43523 23.9429 8.95534C23.9355 9.4665 23.8885 9.97633 23.8022 10.4803C23.7118 11.0983 23.5712 11.9754 23.3903 13.1017C22.9952 15.2746 22.6871 17.268 22.4661 19.0821C22.3725 19.6893 22.3188 20.3019 22.3053 20.916C22.2729 21.3947         22.4156 21.8689 22.7072 22.2516C22.8394 22.4015 23.0035 22.5203 23.1877 22.5996C23.3719 22.6789 23.5715 22.7167 23.7721 22.7101C24.2719 22.6997 24.7562 22.5361 25.1585 22.2417C25.7547 21.7848 26.2942 21.2595 26.7659 20.6768C26.8335         20.5861 26.9212 20.5119 27.0222 20.4601C27.1232 20.4082 27.2349 20.3801 27.3486 20.3778C27.4375 20.3783 27.5246 20.4026 27.6006 20.4482C27.6767 20.4939 27.7389 20.5591 27.7806 20.6369C27.9005 20.853 27.9562 21.0984 27.9413         21.3446C27.9689 21.8166 27.8264 22.2829 27.5395 22.6603C26.9292 23.4545 26.1765 24.1303 25.3192 24.6537C24.6225 25.0628 23.8282 25.2796 23.0186 25.2817C22.0233 25.3451 21.0425 25.0195 20.286 24.3747C19.9713 24.0679 19.7248 23.6994         19.5622 23.2926C19.3995 22.8858 19.3244 22.4497 19.3416 22.0124C19.3922 20.9534 19.5063 19.8984 19.6832 18.8528C19.1503 20.6306 18.2196 22.266 16.9607 23.6371C16.4753 24.1551 15.8877 24.5684 15.2344 24.8513C14.581 25.1343 13.876         25.2808 13.1631 25.2817C12.6611 25.313 12.1582 25.2386 11.6872 25.0633C11.2163 24.8881 10.788 24.6161 10.4305 24.265Z" fill="white" />      </svg>
                </div>
                <div id="experiences-list-button" className="flex-space-between">
                  <span>Choose Existing Content</span>
                  <span><svg width={12} height={8} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">        <path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" fill="#A3B0B8" />      </svg></span>
                </div>
              </div>
              {/* render experiences list */}
              <div id="edit-settings-btn" className="highlight-on-click">
                <svg width={19} height={18} viewBox="0 0 19 18" fill="#C2CBD0" xmlns="http://www.w3.org/2000/svg">        <path fillRule="evenodd" clipRule="evenodd" d="M14.66 0C14.41 0 14.15 0.1 13.96 0.29L12.13 2.12L15.88 5.87L17.71 4.04C18.1 3.65 18.1 3.02 17.71 2.63L15.37 0.29C15.17 0.09 14.92 0 14.66 0ZM11.06 6.02L11.98 6.94L2.92 16H2V15.08L11.06 6.02ZM0 14.25L11.06 3.19L14.81 6.94L3.75 18H0V14.25Z" />      </svg>
              </div>
              {/* render localization */}
              <div id="localization-btn" className="highlight-on-click">
                <svg width={20} height={18} viewBox="0 0 20 18" fill="#fff" xmlns="http://www.w3.org/2000/svg">        <path fillRule="evenodd" clipRule="evenodd" d="M10.783 11.763L8.49701 9.504L8.52401 9.477C10.09 7.731 11.206 5.724 11.863 3.6H14.5V1.8H8.20001V0H6.40001V1.8H0.100006V3.591H10.153C9.55001 5.328 8.59601 6.975 7.30001 8.415C6.46301 7.488 5.77001 6.471 5.22101 5.4H3.42101C4.07801 6.867 4.97801 8.253 6.10301         9.504L1.52201 14.022L2.80001 15.3L7.30001 10.8L10.099 13.599L10.783 11.763ZM15.85 7.19998H14.05L10 18H11.8L12.808 15.3H17.083L18.1 18H19.9L15.85 7.19998ZM14.95 9.60309L13.492 13.5001H16.408L14.95 9.60309Z" />      </svg>
              </div></div>
            <div className="flex-box-center">
              <div id="left-arrow-button" className="experience-content-arrows highlight-on-click flex-center hidden">
                <svg width={12} height={8} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">        <path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" fill="#A3B0B8" />      </svg>
              </div>
              {/* render content */}
              <div id="flow-content"><div className="page-content">
                  <div className="group-container flex-space-between">
                    <div className="step-group flex-space-between no-group-drag">
                      <div className="group-drag" draggable="true">
                        <svg width={7} height={11} viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">        <circle cx="1.1" cy="1.1" r="1.1" fill="#C2CBD0" />        <circle cx="5.50002" cy="1.1" r="1.1" fill="#C2CBD0" />        <circle cx="1.1" cy="5.50002" r="1.1" fill="#C2CBD0" />        <circle cx="5.50002" cy="5.50002" r="1.1" fill="#C2CBD0" />        <circle cx="1.1" cy="9.90005" r="1.1" fill="#C2CBD0" />        <circle cx="5.50002" cy="9.90005" r="1.1" fill="#C2CBD0" />      </svg>
                      </div>
                      <div className="steps flex-space-between">
                        <div className="willy-step" draggable="true"><svg className="tooltip-icon" width={29} height={13} viewBox="0 0 29 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="8.05652" width="20.9433" height="12.1251" rx={1} fill="white" />
                            <path d="M5.63843 5.75772L9.1318 3.04266L9.1318 8.47278L5.63843 5.75772Z" fill="white" />
                            <rect x="11.3635" y="3.3916" width="14.3296" height="1.65342" rx="0.826709" fill="#ACB5BD" />
                            <rect x="11.3635" y="6.69836" width="6.61367" height="1.65342" rx="0.826709" fill="#ACB5BD" />
                            <rect y="4.02759" width="4.02756" height="4.02756" rx="2.01378" fill="white" />
                          </svg></div></div>
                      <div className="add-from-group">
                        <svg width={20} height={20} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">        <g filter="url(#filter0_d)">        <circle cx="7.5" cy="7.5" r="4.5" fill="#F8F8F8" />        <circle cx="7.5" cy="7.5" r={5} stroke="#C2CBD0" />      </g>        <path d="M10 7.85714H7.85714V10H7.14286V7.85714H5V7.14286H7.14286V5H7.85714V7.14286H10V7.85714Z" fill="#C2CBD0" />        <defs>        <filter id="filter0_d" x={0} y={0} width={17} height={17} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">        <feFlood floodOpacity={0} result="BackgroundImageFix" />        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />        <feOffset dx={1} dy={1} />        <feGaussianBlur stdDeviation="1.5" />        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />      </filter>      </defs>      </svg>
                      </div>
                    </div><div className="step-group flex-space-between no-group-drag">
                      <div className="group-drag" draggable="true">
                        <svg width={7} height={11} viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">        <circle cx="1.1" cy="1.1" r="1.1" fill="#C2CBD0" />        <circle cx="5.50002" cy="1.1" r="1.1" fill="#C2CBD0" />        <circle cx="1.1" cy="5.50002" r="1.1" fill="#C2CBD0" />        <circle cx="5.50002" cy="5.50002" r="1.1" fill="#C2CBD0" />        <circle cx="1.1" cy="9.90005" r="1.1" fill="#C2CBD0" />        <circle cx="5.50002" cy="9.90005" r="1.1" fill="#C2CBD0" />      </svg>
                      </div>
                      <div className="steps flex-space-between">
                        <div className="willy-step" draggable="true"><svg className="driven-icon" width={26} height={20} viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width={21} height="12.1579" rx={1} fill="white" />
                            <rect x="3.31592" y="3.40076" width="14.3684" height="1.65789" rx="0.828947" fill="#ACB5BD" />
                            <rect x="3.31592" y="6.71643" width="6.63158" height="1.65789" rx="0.828947" fill="#ACB5BD" />
                            <path d="M25.5547 14.9093H22.9026L24.2984 18.3623C24.3956 18.6016 24.2845 18.87 24.0623 18.9716L22.8332 19.5157C22.604 19.6172 22.3471 19.5012 22.2499 19.269L20.9235 15.9902L18.7569 18.2534C18.4682 18.555 18 18.3225 18 17.927V7.01723C18 6.60082 18.498 6.39782 18.7569 6.69081L25.8672 14.1186C26.154 14.4025 25.9424 14.9093 25.5547 14.9093Z" fill="#D1D3D6" />
                          </svg></div></div>
                      <div className="add-from-group">
                        <svg width={20} height={20} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">        <g filter="url(#filter0_d)">        <circle cx="7.5" cy="7.5" r="4.5" fill="#F8F8F8" />        <circle cx="7.5" cy="7.5" r={5} stroke="#C2CBD0" />      </g>        <path d="M10 7.85714H7.85714V10H7.14286V7.85714H5V7.14286H7.14286V5H7.85714V7.14286H10V7.85714Z" fill="#C2CBD0" />        <defs>        <filter id="filter0_d" x={0} y={0} width={17} height={17} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">        <feFlood floodOpacity={0} result="BackgroundImageFix" />        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />        <feOffset dx={1} dy={1} />        <feGaussianBlur stdDeviation="1.5" />        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />      </filter>      </defs>      </svg>
                      </div>
                    </div></div>
                  <div className="page-change-placeholder" />
                  <div id="add-ui-pattern" className="flex-start">
                    <div id="add-group-step" className="btn-style2 flex-space-between">
                      <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">        <path fillRule="evenodd" clipRule="evenodd" d="M6.75 0C3.03075 0 0 3.03075 0 6.75C0 10.4693 3.03075 13.5 6.75 13.5C10.4692 13.5 13.5 10.4693 13.5 6.75C13.5 3.03075 10.4692 0 6.75 0ZM7.42497 6.075V3.375H6.07497V6.075H3.37497V7.425H6.07497V10.125H7.42497V7.425H10.125V6.075H7.42497ZM1.34997 6.75C1.34997 9.72675 3.77322 12.15 6.74997 12.15C9.72672 12.15 12.15 9.72675 12.15 6.75C12.15 3.77325 9.72672 1.35 6.74997 1.35C3.77322 1.35 1.34997 3.77325 1.34997 6.75Z" fill="#667C89" />      </svg>
                      <span>ADD</span>
                    </div>
                  </div></div></div><div id="right-arrow-button" className="experience-content-arrows highlight-on-click flex-center hidden">
                <svg width={12} height={8} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">        <path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" fill="#A3B0B8" />      </svg>
              </div>
            </div>
            <div className="flex-box-right"><div id="preview-btn" className="btn-style1">
                <span><svg width={17} height={14} viewBox="0 0 22 15" fill="#C2CBD0" xmlns="http://www.w3.org/2000/svg">        <path fillRule="evenodd" clipRule="evenodd" d="M0 7.5C1.73 3.11 6 0 11 0C16 0 20.27 3.11 22 7.5C20.27 11.89 16 15 11 15C6 15 1.73 11.89 0 7.5ZM19.82 7.49997C18.17 4.12997 14.79 1.99997 11 1.99997C7.20998 1.99997 3.82998 4.12997 2.17998 7.49997C3.82998 10.87 7.19998 13 11 13C14.8 13 18.17 10.87 19.82 7.49997ZM11         5.00004C12.38 5.00004 13.5 6.12004 13.5 7.50004C13.5 8.88004 12.38 10 11 10C9.62001 10 8.50001 8.88004 8.50001 7.50004C8.50001 6.12004 9.62001 5.00004 11 5.00004ZM6.49998 7.49995C6.49998 5.01995 8.51998 2.99995 11 2.99995C13.48 2.99995 15.5 5.01995 15.5 7.49995C15.5 9.97995 13.48 12 11 12C8.51998 12 6.49998 9.97995 6.49998 7.49995Z" />      </svg></span>
                <span>PREVIEW</span>
              </div>
              {/* render help */}
              {/* render preview */}
              <div id="publish-experience" className="btn-style2 flex-space-between">
                <span><svg width={16} height={11} viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">        <path d="M16 1.1566L5.02857 11L0 6.48844L1.28914 5.33184L5.02857 8.6786L14.7109 0L16 1.1566Z" fill="white" />      </svg></span>
                <span>PUBLISH</span>
              </div>
              <div id="app-settings-btn" className="highlight-on-click">
                <svg width={21} height={21} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.4682 9.15412C10.1902 9.15412 9.15409 10.1902 9.15409 11.4683C9.15409 12.7463 10.1902 13.7824 11.4682 13.7824C12.7463 13.7824 13.7824 12.7463 13.7824 11.4683C13.7824 10.1902 12.7463 9.15412 11.4682 9.15412ZM7.61133 11.4683C7.61133 9.33816 9.33812 7.61136 11.4682 7.61136C13.5983 7.61136 15.3251 9.33816 15.3251 11.4683C15.3251 13.5984 13.5983 15.3252 11.4682 15.3252C9.33812 15.3252 7.61133 13.5984 7.61133 11.4683Z" fill="#B4BCC1" stroke="#ACB5BD" strokeWidth="0.5" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.24399 2.26046C10.2511 0.579843 12.6864 0.579847 13.6935 2.26047L14.3037 3.27869C14.4994 3.6054 14.886 3.7655 15.2554 3.67292L16.4068 3.38437C18.3073 2.9081 20.0294 4.63016 19.5531 6.53065L19.2646 7.68209C19.172 8.05154 19.3321 8.43806 19.6588 8.63383L20.677 9.24399C22.3577 10.2511 22.3577 12.6864 20.677 13.6935L19.6588 14.3037C19.3321 14.4994 19.172 14.886 19.2646 15.2554L19.5531 16.4068C20.0294 18.3073 18.3073 20.0294 16.4068 19.5531L15.2554 19.2646C14.886 19.172 14.4994 19.3321 14.3037 19.6588L13.6935 20.677C12.6864 22.3577 10.2511 22.3577 9.24399 20.677L8.63383 19.6588C8.43806 19.3321 8.05154 19.172 7.68209 19.2646L6.53065 19.5531C4.63015 20.0294 2.90811 18.3073 3.38437 16.4068L3.67292 15.2554C3.7655 14.886 3.6054 14.4994 3.27869 14.3037L2.26046 13.6935C0.579843 12.6864 0.579847 10.2511 2.26047 9.24399L3.27869 8.63383C3.6054 8.43806 3.7655 8.05154 3.67292 7.68209L3.38437 6.53065C2.9081 4.63015 4.63016 2.90811 6.53065 3.38437L7.68209 3.67292C8.05154 3.7655 8.43806 3.6054 8.63383 3.27869L9.24399 2.26046ZM12.2103 3.14924C11.8746 2.58903 11.0629 2.58903 10.7272 3.14923L10.117 4.16746C9.52969 5.14758 8.37014 5.62788 7.26179 5.35013L6.11035 5.06158C5.47685 4.90283 4.90283 5.47685 5.06158 6.11034L5.35013 7.26179C5.62788 8.37013 5.14758 9.52968 4.16746 10.117L3.14924 10.7272C2.58903 11.0629 2.58903 11.8746 3.14923 12.2103L4.16746 12.8205C5.14758 13.4078 5.62788 14.5674 5.35013 15.6757L5.06158 16.8272C4.90283 17.4607 5.47685 18.0347 6.11034 17.8759L7.26179 17.5874C8.37014 17.3096 9.52968 17.7899 10.117 18.77L10.7272 19.7883C11.0629 20.3485 11.8746 20.3485 12.2103 19.7883L12.8205 18.77C13.4078 17.7899 14.5674 17.3096 15.6757 17.5874L16.8272 17.8759C17.4607 18.0347 18.0347 17.4607 17.8759 16.8272L17.5874 15.6757C17.3096 14.5674 17.7899 13.4078 18.77 12.8205L19.7883 12.2103C20.3485 11.8746 20.3485 11.0629 19.7883 10.7272L18.77 10.117C17.7899 9.52969 17.3096 8.37014 17.5874 7.26179L17.8759 6.11035C18.0347 5.47685 17.4607 4.90283 16.8272 5.06158L15.6757 5.35013C14.5674 5.62788 13.4078 5.14758 12.8205 4.16746L12.2103 3.14924Z" fill="#B4BCC1" stroke="#ACB5BD" strokeWidth="0.5" />
                </svg>
              </div></div>
          </div></div>
        <div id="bar-message" />
      </div><iframe id="engagement-layer" style={{opacity: 0, display: 'none'}}>
      </iframe></div>
  );
}