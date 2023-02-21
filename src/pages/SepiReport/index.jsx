import React from "react";
import Dropdown from "../../components/DropDown";
import Layout from "../../components/Layout/Layout";
import { Back, SepiReportStyle } from "./styled";
import { Sections, table } from "../../mock/Sections";
import { MainButton } from "../../styled/styleComponent";

const SepiReport = () => {
  return (
    <Layout title="SepiReport">

      <Back>
        <MainButton>Back</MainButton>
      </Back>
      <SepiReportStyle>
        <ul className="sections">
          {Sections.map((Section) => (
            <li>
              <Dropdown
                title={Section.title}
                width="400px"
                border="1px solid #000000"
                borderRadius="6px"
                padding="10px"
              >
                <ul>
                  {Section.Items.map((item, index) => (
                    <li className="item" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </Dropdown>
            </li>
          ))}
        </ul>
        <table>
          <tbody>
            {table.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </SepiReportStyle>
    </Layout>
  );
};

export default SepiReport;
