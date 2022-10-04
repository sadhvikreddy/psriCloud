import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './react-tabs.css';
import Dam from '../../data/Dam.jpg'
import './ProjectsCSS.css'

import {
    HeaderHolder,
    HeaderImage,
    HeaderText,
    ProjectContainer,

}
from './ProjectElements'




const Projects = () => {
  const Tables = [
    <table>
    <thead>
      <tr>
        <th> Sl.No. </th>
        <th> Name of the Project </th>
        <th> Name of the Employer </th>
        <th> Nature of Work </th>
        <th> Total Value </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label = "SL No">1</td>
        <td data-label = "NAME OF THE PROJECT" className = 'PName'>River Embankment and Earth Filling, Bagmathi river Extension Project, Sitamarhi, Bihar</td>
        <td data-label = "EMPLOYER">Avantika GHRA JV, Hyderabad</td>
        <td data-label = "NATURE OF WORK">Earth Filling and EXcavation and River Embankment </td>
        <td data-label = 'TOTAL VALUE'>137.16 Crores</td>
      </tr>
      <tr>
        <td data-label = "SL No">2</td>
        <td data-label = "NAME OF THE PROJECT" className = 'PName'>Civil Constructions, buildings, labs and structural works</td>
        <td data-label = "EMPLOYER">Dr.Reddy Laboratories ltd, Pydibhimavaram</td>
        <td data-label = "NATURE OF WORK">All Civil and Constuction Works</td>
        <td data-label = 'TOTAL VALUE'>60 Crores</td>
      </tr>
      <tr>
        <td data-label = "SL No">3</td>
        <td data-label = "NAME OF THE PROJECT" className = 'PName'>River Embankment and Earth Filling, Adhwara Group, Patna</td>
        <td data-label = "EMPLOYER">GH Reddy Associates Pvt. Ltd.</td>
        <td data-label = "NATURE OF WORK">Transportation, Loading and Unloading</td>
        <td data-label = 'TOTAL VALUE'>27.20 Crores</td>
      </tr>
      <tr>
      <td data-label = "SL No">4</td>
      <td data-label = "NAME OF THE PROJECT" className = 'PName'>Construction of Embankment pasarlapudi Dindi section from KM105/170 to km 126/510 of NH 14(new NH 216) Road work</td>
      <td data-label = "EMPLOYER">Sudharma InfraTech Pvt Ltd</td>
      <td data-label = "NATURE OF WORK">Road Project</td>
      <td data-label = "TOTAL VALUE">21.94 Crores</td>
    </tr>
      <tr>
        <td data-label = "SL No">5</td>
        <td data-label = "NAME OF THE PROJECT" className = 'PName'>Tumkur Shivamogga road project, NHAI, karnataka</td>
        <td data-label = "EMPLOYER">Ashoka Buildcon Ltd</td>
        <td data-label = "NATURE OF WORK">Road Project</td>
        <td data-label = 'TOTAL VALUE'>20 Crores</td>
      </tr>
      <tr>
        <td data-label = "SL No">6</td>
        <td data-label = "NAME OF THE PROJECT" className = 'PName'>Jasrana Branch Canal Work, Govt of UP</td>
        <td data-label = "EMPLOYER">Sri Avantika Contractors ltd</td>
        <td data-label = "NATURE OF WORK">Earth Cutting &amp; Filling and Embankment</td>
        <td data-label = 'TOTAL VALUE'>19.65 Crores</td>
      </tr>

      <tr>
        <td data-label = "SL No">7</td>
        <td data-label = "NAME OF THE PROJECT"  className = 'PName'>Drilling &amp; blasting , Excavation &amp; Earth filling work at NTPC Khargone Dist, M.P. sub contract from Tracks &amp; Towers infratech pvt Ltd</td>
        <td data-label = "EMPLOYER">Tracks and Towers</td>
        <td data-label = "NATURE OF WORK">Rock Excavation</td>
        <td data-label = 'TOTAL VALUE'>14 Crores</td>
      </tr>
      <tr>
        <td data-label = "SL No">8</td>
        <td data-label = "NAME OF THE PROJECT" className = 'PName'>Port Work, Gopalpur Port, Ganjam, Dist, Orissa</td>
        <td data-label = "EMPLOYER">Sri Avantika Contactors ltd, Hyderbad</td>
        <td data-label = "NATURE OF WORK">Drilling, Blasting, Rock Excavation and Filling</td>
        <td data-label = 'TOTAL VALUE'>13.68 Crores</td>
      </tr>
      <tr>
        <td data-label = "SL No">9</td>
        <td data-label = "NAME OF THE PROJECT" className = 'PName'>Stone Boulder supply for crusher, Reservoir work, hard rock excavation, wagon loading and tunnel Work</td>
        <td data-label = "EMPLOYER">Simplex Concrete Piles ltd, Kolkata</td>
        <td data-label = "NATURE OF WORK">Piles Foundation and Rock excavation</td>
        <td data-label = 'TOTAL VALUE'>4 Crores</td>
      </tr>
      <tr>
        <td data-label = "SL No">10</td>
        <td data-label = "NAME OF THE PROJECT" className = 'PName'>Coal Handling Plant</td>
        <td data-label = "EMPLOYER">Simplex Concrete Piles ltd, New Delhi</td>
        <td data-label = "NATURE OF WORK">Piles Foundation and Rock excavation</td>
        <td data-label = 'TOTAL VALUE'>3 Crores</td>
      </tr>
      <tr>
        <td data-label = "SL No">11</td>
        <td data-label = "NAME OF THE PROJECT" className = 'PName'>Earth filling and Excavation</td>
        <td data-label = "EMPLOYER">Simplex Concrete Piles ltd, New Delhi</td>
        <td data-label = "NATURE OF WORK">Earth Filling and Excavation</td>
        <td data-label = 'TOTAL VALUE'>3 Crores</td>
      </tr>
      <tr>
        <td data-label = "SL No">12</td>
        <td data-label = "NAME OF THE PROJECT" className = 'PName'>Road project of NH5 from CH31 to CH54</td>
        <td data-label = "EMPLOYER">AKP Infrastructures, AHmadabad</td>
        <td data-label = "NATURE OF WORK">Construction of Road and Related Civil and mechanical works</td>
        <td data-label = 'TOTAL VALUE'>3 Crores</td>
      </tr>
      <tr>
        <td data-label = "SL No">13</td>
        <td data-label = "NAME OF THE PROJECT" className = 'PName'>Hard Rock Excavation for Nuclear Power Plant, Kudankulam</td>
        <td data-label = "EMPLOYER">Simplex Concrete Piles ltd, New Delhi</td>
        <td data-label = "NATURE OF WORK">Hard Rock Excavation with pre shearing technology</td>
        <td data-label = 'TOTAL VALUE'>2.5 Crore</td>
      </tr>
      <tr>
        <td data-label = "SL No">14</td>
        <td data-label = "NAME OF THE PROJECT" className = 'PName'>Back Filling for Nuclear Power Plant, Kudankulam</td>
        <td data-label = "EMPLOYER">Simplex Concrete Piles Ltd, Kolkata</td>
        <td data-label = "NATURE OF WORK">Back Filling</td>
        <td data-label = 'TOTAL VALUE'>1.5 Crores</td>
      </tr>
      <tr>
        <td data-label = "SL No">15</td>
        <td data-label = "NAME OF THE PROJECT" className = 'PName'>Modernisation of KC Canal</td>
        <td data-label = "EMPLOYER">S.V Engineering Constructions, Hyderabad</td>
        <td data-label = "NATURE OF WORK">Formation of Embankment with CNS Soil</td>
        <td data-label = 'TOTAL VALUE'>1 Crore</td>
      </tr>
      <tr>
        <td data-label = "SL No">16</td>
        <td data-label = "NAME OF THE PROJECT" className = 'PName'>Earth Work Excavtion, Filling, formation of embankment, Excavation and Disposal of earth</td>
        <td data-label = "EMPLOYER">Simplex Concrete Piles India ltd, Kolkata</td>
        <td data-label = "NATURE OF WORK">Earth Disposal with a lead of 7 to 8KM</td>
        <td data-label = 'TOTAL VALUE'>52 lakhs</td>
      </tr>
      <tr>
        <td data-label = "SL No">17</td>
        <td data-label = "NAME OF THE PROJECT" className = 'PName'>Hard Rock Excavation for Nuclear Power Plant, Kudankulam</td>
        <td data-label = "EMPLOYER">L&amp;T</td>
        <td data-label = "NATURE OF WORK">Rock Excavation</td>
        <td data-label = 'TOTAL VALUE'>50 lakhs</td>
      </tr>
      <tr>
        <td data-label = "SL No">18</td>
        <td data-label = "NAME OF THE PROJECT" className = 'PName'>Earth Work Excavtion, Filling, formation of embankment, Excavation and Disposal of earth</td>
        <td data-label = "EMPLOYER">NBCC, New Delhi</td>
        <td data-label = "NATURE OF WORK">Earth Disposal with a lead of 7 to 8KM</td>
        <td data-label = 'TOTAL VALUE'>40 lakhs</td>
      </tr>
      <tr>
        <td data-label = "SL No">19</td>
        <td data-label = "NAME OF THE PROJECT" className = 'PName'>Earth Work Excavtion and Disposal</td>
        <td data-label = "EMPLOYER">Gammon India Ltd, Mumbai</td>
        <td data-label = "NATURE OF WORK">Embankment formation with lead of 7 to 9KM</td>
        <td data-label = 'TOTAL VALUE'>30 lakhs</td>
      </tr>
      <tr>
        <td data-label = "SL No">20</td>
        <td data-label = "NAME OF THE PROJECT" className = 'PName'>Earth Work Excavtion, Filling, formation of embankment, Excavation and Disposal of earth</td>
        <td data-label = "EMPLOYER">Bridge and Roof India ltd, Kolkata</td>
        <td data-label = "NATURE OF WORK">Embankment formation with lead of 4KM</td>
        <td data-label = 'TOTAL VALUE'>15 lakhs</td>
      </tr>
    </tbody>
  </table>,
  <table>
  <thead>
    <tr>
      <th> Sl No. </th>
      <th> Name of the Project </th>
      <th> Name of the Employer</th>
      <th> Nature of Work</th>
      <th> Total Value </th>
      <th> Work in Hand </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label = "SL No">1</td>
      <td data-label = "NAME OF THE PROJECT" className = 'PName'>Rasing strenghtneing of embankments along River Bagmathi in North Bihar- Extension Project works</td>
      <td data-label = "EMPLOYER">Avantika-GHRA JV</td>
      <td data-label = "NATURE OF WORK">Irrigation</td>
      <td data-label = "TOTAL VALUE">235 Crores</td>
      <td data-label = "WORK IN HAND">171.15 Crores</td>
    </tr>
    <tr>
      <td data-label = "SL No">2</td>
      <td data-label = "NAME OF THE PROJECT" className= 'PName'>Construction of Embankment along River Jhim &amp; Jamura River bank on back to back basis</td>
      <td data-label = "EMPLOYER">GH Reddy Associates</td>
      <td data-label = "NATURE OF WORK">Irrigation</td>
      <td data-label = "TOTAL VALUE">39.82 Crores</td>
      <td data-label = "WORK IN HAND">11.90 Crores</td>
    </tr>
    <tr>
      <td data-label = "SL No">3</td>
      <td data-label = "NAME OF THE PROJECT" className = 'PName'>Palamuru Rangareddy Lift Irrigation Scheme work , Jedcherla, Telangana, Drilling, Blasting and Earth work excavation works</td>
      <td data-label = "EMPLOYER">RVR Infra Pvt Ltd</td>
      <td data-label = "NATURE OF WORK">Rock Excavation and Irrigation</td>
      <td data-label = "TOTAL VALUE">38.26 Crores</td>
      <td data-label = "WORK IN HAND">8 Crores</td>
    </tr>
    <tr>
      <td data-label = "SL No">4</td>
      <td data-label = "NAME OF THE PROJECT" className= 'PName'>Stevedoring and Port Services at Gangavaram Port Ltd, Visakhapatnam . Works will be given on Job/ Assignment basis</td>
      <td data-label = "EMPLOYER">Gangavaram Port Ltd, Gajuwaka</td>
      <td data-label = "NATURE OF WORK">Ports and Logistics</td>
      <td data-label = "TOTAL VALUE">-</td>
      <td data-label = "WORK IN HAND">-</td>
    </tr>
    <tr>
      <td data-label = "SL No">5</td>
      <td data-label = "NAME OF THE PROJECT" className = 'PName'>Adani Krishnapatnam Port Stevedoring and Intercarting Works</td>
      <td data-label = "EMPLOYER">Adani Group</td>
      <td data-label = "NATURE OF WORK">Ports and Logistics</td>
      <td data-label = "TOTAL VALUE">-</td>
      <td data-label = "WORK IN HAND">-</td>
    </tr>
    </tbody>
    </table>
  ]

 


    return (
        <>
        <ProjectContainer>
            <HeaderHolder>
                <HeaderText>PROJECTS</HeaderText>
                <HeaderImage src = {Dam} alt = {1} />
            </HeaderHolder>
            {/* <div class="tabs">
  <div class="tab-2">
    <label for="tab2-1">Completed Projects</label>
    <input id="tab2-1" name="tabs-two" type="radio" checked="checked" />
    <div>
      


    <table>
  <thead>
    <tr>
      <th> Sl.No. </th>
      <th> Name of the Project </th>
      <th> Employer </th>
      <th> Nature of Work </th>
      <th> Value </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td className = 'PName'>Earth Work Excavtion, Filling, formation of embankment, Excavation and Disposal of earth</td>
      <td>Simplex Concrete Piles India ltd, Kolkata</td>
      <td>Earth Disposal with a lead of 7 to 8KM</td>
      <td>52 lakhs</td>
    </tr>
    <tr>
      <td>2</td>
      <td className = 'PName'>Earth Work Excavtion, Filling, formation of embankment, Excavation and Disposal of earth</td>
      <td>NBCC, New Delhi</td>
      <td>Earth Disposal with a lead of 7 to 8KM</td>
      <td>40 lakhs</td>
    </tr>
    <tr>
      <td>3</td>
      <td className = 'PName'>Earth Work Excavtion, Filling, formation of embankment, Excavation and Disposal of earth</td>
      <td>Bridge and Roof India ltd, Kolkata</td>
      <td>Embankment formation with lead of 4KM</td>
      <td>15 lakhs</td>
    </tr>
    <tr>
      <td>4</td>
      <td className = 'PName'>Earth Work Excavtion and Disposal</td>
      <td>Gammon India Ltd, Mumbai</td>
      <td>Embankment formation with lead of 7 to 9KM</td>
      <td>30 lakhs</td>
    </tr>
    <tr>
      <td>5</td>
      <td className = 'PName'>Modernisation of KC Canal</td>
      <td>S.V Engineering Constructions, Hyderabad</td>
      <td>Formation of Embankment with CNS Soil</td>
      <td>1 Crore</td>
    </tr>
    <tr>
      <td>6</td>
      <td className = 'PName'>Road project of NH5 from CH31 to CH54</td>
      <td>AKP Infrastructures, AHmadabad</td>
      <td>Construction of Road and Related Civil and mechanical works</td>
      <td>3 Crores</td>
    </tr>
    <tr>
      <td>7</td>
      <td className = 'PName'>Civil Constructions, buildings, labs and structural works</td>
      <td>Dr.Reddy Laboratories ltd, Pydibhimavaram</td>
      <td>All Civil and Constuction Works</td>
      <td>60 Crores</td>
    </tr>
    <tr>
      <td>8</td>
      <td className = 'PName'>Hard Rock Excavation for Nuclear Power Plant, Kudankulam</td>
      <td>Simplex Concrete Piles ltd, New Delhi</td>
      <td>Hard Rock Excavation with pre shearing technology</td>
      <td>2.5 Crore</td>
    </tr>
    <tr>
      <td>9</td>
      <td className = 'PName'>Hard Rock Excavation for Nuclear Power Plant, Kudankulam</td>
      <td>L&amp;T</td>
      <td>Rock Excavation</td>
      <td>50 lakhs</td>
    </tr>
    <tr>
      <td>10</td>
      <td className = 'PName'>Back Filling for Nuclear Power Plant, Kudankulam</td>
      <td>Simplex Concrete Piles Ltd, Kolkata</td>
      <td>Back Filling</td>
      <td>1.5 Crores</td>
    </tr>
    <tr>
      <td>11</td>
      <td className = 'PName'>Stone/Boulder supply for crusher, Reservoir work, hard rock excavation, wagon loading and tunnel worl</td>
      <td>Simplex Concrete Piles ltd, Kolkata</td>
      <td>Piles Foundation, Rock excavation</td>
      <td>4 Crores</td>
    </tr>
    <tr>
      <td>12</td>
      <td className = 'PName'>Coal Handling Plant</td>
      <td>Simplex Concrete Piles ltd, New Delhi</td>
      <td>Piles Foundation, Rock excavation</td>
      <td>3 Crores</td>
    </tr>
    <tr>
      <td>13</td>
      <td className = 'PName'>Earth filling and Excavation</td>
      <td>Simplex Concrete Piles ltd, New Delhi</td>
      <td>Earth Filling and Excavation</td>
      <td>3 Crores</td>
    </tr>
    <tr>
      <td>14</td>
      <td className = 'PName'>Port Work, Gopalpur Port, Ganjam, Dist, Orissa</td>
      <td>Sri Avantika Contactors ltd, Hyderbad</td>
      <td>Drilling and Blasting Rock Excavation and Filling</td>
      <td>13.68 Crores</td>
    </tr>
    <tr>
      <td>15</td>
      <td className = 'PName'>River Embankment and Earth Filling, Bagmathi river Extension Project, Sitamarhi, Bihar</td>
      <td>Avantika GHRA JV, Hyderabad</td>
      <td>Earth Filling and EXcavation and River Embankment </td>
      <td>137.16 Crores</td>
    </tr>
    <tr>
      <td>16</td>
      <td className = 'PName'>River Embankment and Earth Filling, Adhwara Group, Patna</td>
      <td>GH Reddy Associates Pvt. Ltd.</td>
      <td>Transportation  Loading and Unloading</td>
      <td>27.20 Crores</td>
    </tr>
    <tr>
      <td>17</td>
      <td className = 'PName'>Jasrana Branch Canal Work, Govt of UP</td>
      <td>Sri Avantika Contractors ltd</td>
      <td>Earth Cutting &amp; Filling and Embankment</td>
      <td>19.65 Crores</td>
    </tr>
    <tr>
      <td>18</td>
      <td className = 'PName'>Tumkur Shivamogga road project, NHAI, karnataka</td>
      <td>Ashoka Buildcon Ltd</td>
      <td>Road Work</td>
      <td>20 Crores</td>
    </tr>
    <tr>
      <td>19</td>
      <td className = 'PName'>Drilling &amp; blasting , Excavation &amp; Earth filling work at NTPC Khargone Dist, M.P. sub contract from Tracks &amp; Towers infratech pvt Ltd</td>
      <td>Tracks and Towers</td>
      <td>Rock Excavation</td>
      <td>14 Crores</td>
    </tr>
  </tbody>
</table>
    </div>
  </div>
  <div class="tab-2">
    <label for="tab2-2">Ongoing Projects</label>
    <input id="tab2-2" name="tabs-two" type="radio" />
    <div>
    <table>
  <thead>
    <tr>
      <th> Sl.No. </th>
      <th> Name of the Project </th>
      <th>Name of the employer</th>
      <th>Nature of Work</th>
      <th> Total Value </th>
      <th> Work in Hand </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Rasing strenghtneing of embankments along River Bagmathi in North Bihar- Extension Project works and principle contractor is M/S Ava ntika GHRA JV</td>
      <td>Avantika-GHRA JV</td>
      <td>Irrigation</td>
      <td>235 Crores</td>
      <td>171.15 Crores</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Construction of Embankment along River Jhim &amp; Jamura River bank on back to back basis . Principle contractor is M/S GH Reddy Associates.</td>
      <td>GH Reddy Associates</td>
      <td>Irrigation work</td>
      <td>39.82 Crores</td>
      <td>11.90 Crores</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Stevedoring and Port Services at Gangavaram Port Ltd, Visakhapatnam . Works will be given on Job/ Assignment basis</td>
      <td>Gangavaram Port Ltd, Gajuwaka</td>
      <td>Ports and Logistics</td>
      <td>NA</td>
      <td>NA</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Palamuru Rangareddy Lift Irrigation Scheme work , Jedcherla, Telangana, Drilling, Blasting and Earth work excavation works, Sub Contract work from RVR Infra Pvt Ltd, Hyderabad.</td>
      <td>RVR Infra Pvt Ltd</td>
      <td>Rock Excavation and Irrigation</td>
      <td>38.26 Crores</td>
      <td>8 Crores</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Construction of Embankment pasarlapudi Dindi section from KM105/170 to km 126/510 of NH 14(new NH 216) Road work. Sub Contract from Sudharma Infrateh Pvt Ltd.</td>
      <td>Sudharma InfraTech Pvt Ltd</td>
      <td>Road Project</td>
      <td>21.94 Crores</td>
      <td>19 Crores</td>
    </tr>
    </tbody>
    </table>
    </div>
  </div>
  </div> */}
        <Tabs>
            <TabList>
              <Tab>Ongoing Projects</Tab>
              <Tab>Completed Projects</Tab>
            </TabList>

            <TabPanel>
              <div>
                {Tables[1]}
              </div>  
            </TabPanel> 
            <TabPanel>
              <div>
                {Tables[0]}
              </div>  
            </TabPanel> 
          </Tabs>
        </ProjectContainer>
    </>
    )
}

export default Projects