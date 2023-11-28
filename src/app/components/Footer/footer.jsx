import React from "react";
import { Column, Div, Div2, Div3, Div4, Div5, Div6, Img, Img2, Column2, Div7, Div8, Div9, Column3, Div10, Div11, Div12, Div13, Column4, Div14, Div15, Column5, Div16, Div17, Div18, Div19, Input, Div20, Div21 } from './styles.js';
import SearchIcon from '@mui/icons-material/Search';
import Button from "../Button/button.jsx";

const Footer = () => {
  return (
    <Div>
      <Div2>
        <Div3>
          <Column>
            <Div4>
              <Div5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus vulputate orci gravida tincidunt ullamcorper. Aenean
                blandit, ante ut posuere gravida,
              </Div5>
              <Div6>
                <Img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb8862cd-b195-4df6-a60d-82db47019836?apiKey=703230a9c6564206924200d66e906592&"
                />
                <Img2
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a5948d0-60b2-42eb-8cc2-deb905c7563e?apiKey=703230a9c6564206924200d66e906592&"
                />
              </Div6>
            </Div4>
          </Column>
          <Column2>
            <Div7>
              <Div8>
                <Div9>
                  <Column3>
                    <Div10>
                      <Div11>Planeje eventos</Div11>
                      <Div12>
                        Create and Set Up
                        <br />
                        Sell Tickets
                        <br />
                        Online RSVP <br />
                        Online Events
                      </Div12>
                    </Div10>
                  </Column3>
                  <Column4>
                    <Div13>
                      <Div14>MyParty</Div14>
                      <Div15>
                        About Us
                        <br />
                        Press
                        <br />
                        Contact Us
                        <br />
                        Help Center
                        <br />
                        How it Works
                        <br />
                        Privacy
                        <br />
                        Terms
                      </Div15>
                    </Div13>
                  </Column4>
                  <Column5>
                    <Div16>
                      <Div17>Fique no topo</Div17>
                      <Div18>Venda concosco</Div18>
                      <Div19>
                        <Input placeholder="Email" />
                        <Div20>Inscrever-se</Div20>
                      </Div19>
                    </Div16>
                  </Column5>
                </Div9>
              </Div8>
              <Div21>Copyright © 2022 MyParty</Div21>
            </Div7>
          </Column2>
        </Div3>
      </Div2>
    </Div>
  );
};

export default Footer;