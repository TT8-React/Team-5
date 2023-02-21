import React from "react";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import { StyledTableCon } from "./style";
import { MainButton, SignCard } from "../../styled/styleComponent";
// import ImageInput from "../../imageinpu";
// import StyledTablecon from "./style";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

function Customized() {
  return (
    <div>
      <StyledTableCon>
        <SideBar />

        <div class="ccon">
          <Header />
          <div class="buttcon">
            <MainButton>back</MainButton>
            <div className="cardsCon">
              <div class="card">
                <SignCard className="bbnn">
                  <p class="cardsText">
                    Lorem ipsum dolor <FaAngleRight className="ico" />
                  </p>
                  <p class="cardsText">
                    Lorem ipsum dolor <FaAngleRight className="ico" />
                  </p>
                  <p class="cardsText">
                    Lorem ipsum dolor <FaAngleRight className="ico" />
                  </p>
                  <p class="cardsText">
                    Lorem ipsum dolor <FaAngleRight className="ico" />
                  </p>
                  <p class="cardsText">
                    Lorem ipsum dolor <FaAngleRight className="ico" />
                  </p>
                </SignCard>
              </div>
              <div class="butts">
                <MainButton>
                  <FaAngleRight />
                  <FaAngleRight />
                </MainButton>
                <MainButton>
                  <FaAngleLeft />
                  <FaAngleLeft />
                </MainButton>
              </div>
              <div class="card">
                <SignCard className="bbnn">
                  <p class="cardsText">Lorem ipsum dolor.</p>
                  <p class="cardsText">Lorem ipsum dolor.</p>
                  <p class="cardsText">Lorem ipsum dolor.</p>
                </SignCard>
              </div>
            </div>

            <p class="pp">
              Customize Report - Admin can manage customize data points. Admin
              can also download reports.
            </p>
          </div>
        </div>
      </StyledTableCon>
    </div>
  );
}

export default Customized;
