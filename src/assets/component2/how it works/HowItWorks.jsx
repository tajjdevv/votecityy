import React, { useState } from 'react'
import "./howitworks.css"
// import Button from '../join/Button'
import Btn from './btn'
import home from "/src/assets/home2.png"
import home2 from "/src/assets/home.png"
import welcome from "/src/assets/Welcome1.png"
import welcome1 from "/src/assets/Welcome.png"
import google from '/src/assets/google.png'
import apple from '/src/assets/apple.png'
import phone from '/src/assets/phone-call.png'
import inst from '/src/assets/instagram.png'
import twitter from '/src/assets/twitter.png'
import envelope from '/src/assets/envelope.png'
import facebook from '/src/assets/facebook.png'
import Pages from './Pages'
import Policy from "/src/assets/VotecityWebPrivacyPolicy.pdf"
import Terms from "/src/assets/VotecityWebTermsCondition.pdf"
import Stepp from './Stepp'
// import Terms from "src/assets/VotecityWebTermsCondition.pdf"
const HowItWorks = () => {

  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen(true)
    document.body.style.overflowY = "hidden"
    // document.body.style.filter = "blur(2px)"
  }
  const handleClose = () => {
    setIsOpen(false)
    document.body.style.overflowY = "auto"
  }
  const [isOpenn, setIsOpenn] = useState(false)
  const handleOpenn = () => {
    setIsOpenn(true)
    document.body.style.overflowY = "hidden"
  }
  const handleClosen = () => {
    setIsOpenn(false)
    document.body.style.overflowY = "auto"
  }

  return (

    <div id='work'>
      <div id="carry">
        <h3>How it <span>Works</span></h3>
        <p id='mi'>VoteCity is easy to use! Here’s how you can start making a difference in your community:</p>
        <div id='step1'>
          <p><span>Step 1:</span> Download App <br /> "Available on both Andriod and IOS."</p>
          <div id="body1">
            <Btn idd={"idd"} fon=
              {'none'} the={"rgba(224, 224, 224, 1)"} bod={"1px solid rgba(224, 224, 224, 1)"} href={"/#"} id={"id"} img={apple} text={"Download"}></Btn>
            <Btn img={google} idd={"idd"} bod={"1px solid rgba(224, 224, 224, 1)"} fon=
              {'none'} the={"rgba(224, 224, 224, 1)"} href={"/#"}
              text={"Download"}></Btn>
          </div>
        </div>
        <Pages pp={"p"} step={"Step 2"} textSt={"Create Your Account  "} ttt={"Sign up in minutes"} img={welcome} />
        <Pages pp={"p"} step={"Step 3"} textSt={"Explore and Engage"} ttt={"“Join polls, donate, register for events,"} img={home2} />
        <div id="body">
          <h2>
            "Get VoteCity on Your <span>Phone</span>"
          </h2>
          <p id='ne'>"Download on App store" and Get it on
            Google play</p>
          <Btn idd={"idd"} fon=
            {'none'} the={"rgba(224, 224, 224, 1)"} bod={"1px solid rgba(224, 224, 224, 1)"} href={"/#"} id={"id"} img={apple} text={"Download"}></Btn>
          <Btn img={google} idd={"idd"} bod={"1px solid rgba(224, 224, 224, 1)"} fon=
            {'none'} the={"rgba(224, 224, 224, 1)"} href={"/#"}
            text={"Download"}></Btn>
        </div>
      </div>
      <div id="carry2">
  <h3>How it <span>Works</span></h3>
  <p id='mi'>VoteCity is easy to use! Here’s how you can start making a difference in your community:</p>
  <div id='step1'>
    <p style={{textAlign:"start"}}><span>Step 1:</span> Download App <br /> "Available on both Andriod and IOS."</p>
    <div id="body1">
      <Btn idd={"idd"} fon=
        {'none'} the={"rgba(224, 224, 224, 1)"} bod={"1px solid rgba(224, 224, 224, 1)"} href={"/#"} id={"id"} img={apple} text={"Download"}></Btn>
      <Btn img={google} idd={"idd"} bod={"1px solid rgba(224, 224, 224, 1)"} fon=
        {'none'} the={"rgba(224, 224, 224, 1)"} href={"/#"}
        text={"Download"}></Btn>
    </div>
  </div>
  <Stepp  pp={"p"} step={"Step 2"} textSt={"Create Your Account  "} ttt={"Sign up in minutes"} img={welcome1}/>
  {/* <Pages /> */}
  <Pages pp={"p"} step={"Step 3"} textSt={"Explore and Engage"} ttt={"“Join polls, donate, register for events,"} img={home} />
  <div id="body">
    <h2>
      "Get VoteCity on Your <span>Phone</span>"
    </h2>
    <p id='ne'>"Download on App store" and Get it on
      Google play</p>
    <Btn idd={"idd"} fon=
      {'none'} the={"rgba(224, 224, 224, 1)"} bod={"1px solid rgba(224, 224, 224, 1)"} href={"/#"} id={"id"} img={apple} text={"Download"}></Btn>
    <Btn img={google} idd={"idd"} bod={"1px solid rgba(224, 224, 224, 1)"} fon=
      {'none'} the={"rgba(224, 224, 224, 1)"} href={"/#"}
      text={"Download"}></Btn>
  </div>
</div>
      <div id="news">
        <div id="link">
          <a href="#">Career</a>
          <a href="mailto:support@www.Votecity.ng">Contact US</a>
          <a href="mailto:support@votecity.ng">Help</a>
        </div>
        <div id="soc">
          <a href='#' id='ip'> <img src={envelope} alt="" /></a>
          <a href='#' id='ip'> <img src={facebook} alt="" /></a>
          <a href='#' id='ip'> <img src={twitter} alt="" /></a>
          <a href='#' id='ip'> <img src={inst} alt="" /></a>
          <a href='#' id='ip'> <img src={phone} alt="" /></a>
        </div>
        <p id='nnn'>Newsletter <span>Signup:</span></p>
        <div id="sub">
          <input type="email"  placeholder='Enter your email address' name="email" id="email" />
          <p> <span>Sing up</span></p>
        </div>
        <p id='by'>By clicking “Sign up”, you are  accepting
          Votecity.com <br /></p>
        {/* <br /> */}

        {/* <h5 className='pim'><a target='parent' href={Policy}>Privacy policy</a></h5> */}
        {/* {/* <h5 className='pim'><a  target='pa`rent' href={Terms}>Terms & Conditions</a></h5> */}
        {/* <br /><br /> */}
        <div style={{ overflowY: isOpen ? "auto" : "" }} id="priv">
          <button onClick={handleOpen}>Privacy Policy </button>  <p id='pimm'>&nbsp;and &nbsp;</p>
          <button onClick={handleOpenn}>Terms & Conditions </button>
          {/* <br /><br /> */}
          {isOpen && (
            <div className="popup">
              <h3>PRIVACY POLICY FOR WEBSITE</h3>
              <h5>Effective date: December 12, 2024</h5>
              <h5>Applicable to:</h5>
              <h4>1. DEFINITIONS</h4>
              <p><b>"Data Controller"</b> means the publisher and owner of the Website and the party
                also
                responsible for the collection of data. <br />
                <b>"Data Processing Officer"</b> means the party responsible for overseeing data
                protection strategy
                and implementation to ensure compliance. <br />
                <b>"Content"</b> means any content, writing, images, audiovisual content, or other
                information
                published on this Website. <br />
                <b>"Parties"</b> means both You (the user of the Service) and the Data Controller:
                Votecity Limited,
                Tajudeen Khabab. <br />
                <b>"Personal Data"</b> means any personal information collected for You in relation to
                your use of
                this service which is capable of identifying You. <br />
                <b>"Service"</b> means the Website, known as <a href=""> www.votecity.ng</a>, including all pages,
                subpages, blogs,
                forums, and other connected internet content whatsoever. <br />
                <b>"Third Party Service Provider"</b> means a party or parties contracted by the owner/
                data
                controller to process the personal data of the user. <br />
                <b>"You, Yours"</b> The user of this Website.</p>
              <h4>2. INTRODUCTION</h4>
              <p>This Privacy Policy is designed to inform You about the Personal Data we
                collect, how we
                collect this data, the uses of the data, and Your rights relating to the
                Personal Data when You
                use this Service.
                We are committed to protecting your Personal Data while You use this Website.
                By continuing to use our Website, You acknowledge that You have reviewed the
                Privacy Policy
                and agree to its terms. This also means that You have consented to the use of
                Your Personal
                Data and have accepted the applicable disclosures.</p>
              <h4>3. CONTACT</h4>
              <p>The operator who is also the party responsible for the collection of data is
                as
                follows: <br />
                Votecity
                Limited and can be contacted as follows: <br />
                <b>Lekki Lagos, Nigeria</b> <br />
                <b>+234 9139265486</b> <br />
                <b>support@votecity.ng</b> <br />
                The Data Protection Officer is as follows: <br />
                Tajudeen Khabab and can be contacted
                as follows: <br />
                <b>Surulere Lagos, Nigeria</b> <br />
                <b>+234 7010409001</b> <br />
                <b>tajudeenkhabab2@gmail.com</b></p>
              <h4>4. THE PERSONAL DATA WE COLLECT FROM YOU</h4>
              <p>We collect various information to enable us to provide good service to all
                our
                users. Depending
                on how our service will be used, the different types of Personal Data we collect
                are as follows: <br />
                <b>A. All users:</b> We will collect passive information from all users. This
                information includes
                cookies, IP address information, location information, and certain browser
                information. <br />
                <b>B. User experience:</b> From time to time, we may also request certain Personal Data
                that
                may be necessary to improve our Service.</p>
              <h4>5. THE PERSONAL DATA WE COLLECT AS YOU USE OUR SERVICE</h4>
              <p>We use the following to collect Personal Data from You:
                Cookies: We use the data collected by the cookies to offer You the best
                experience on our
                Website. Cookies are information stored on Your browser when You visit our
                Website or use a
                social network with Your PC, Smartphone, or Tablet. They contain various data,
                including the
                name of the server from which it comes, the numeric identifier, etc. The types
                of cookies we use
                are as follows:
                Technical cookies: These cookies are essential for the correct functioning of
                our Website and
                are required to provide the Service required to our users.
                Support in configuring your browser: You can manage these cookies through the
                settings of
                Your browser on Your device. However, deleting cookies from Your browser may
                remove the
                preferences You have set for this Website.
                Log Data: We also use log files which store automatic information collected whe
                users visit
                this Website. The log data which may be collected includes: <br />
                <b>(i)</b> The domain and host from which You access the Website <br />
                <b>(ii)</b> Name of the Internet Service Provider (ISP) <br />
                <b>(iii)</b> Date and time of visit <br />
                <b>(iv)</b> Your computer operating system and browser software <br />
                <b>(v)</b> Web pages visited, the duration, and frequency of visits <br />
                <b>(vi)</b> Your Internet Protocol (IP) address</p>
              <h4>6. THIRD PARTIES</h4>
              <p>We may utilize third party service providers, from time to time, to help in
                processing Your
                Personal Data and help us with our Website.
                We share Your Personal Data with third parties in order to protect our rights,
                properties, and
                safety, and for the safety of users of this Website.</p>
              <h4>7. PURPOSE OF PROCESSING PERSONAL DATA</h4>
              <p>We collect and use Your Personal Data for the following reasons: <br />
                <b>(i)</b> To provide our Service and to maintain and make improvements to the Service
                we
                provide to You <br />
                <b>(ii)</b> To provide personalized Service to You, including making recommendations and
                providing personalized content <br />
                <b>(iii)</b> To provide You with updates on the Website and related items <br />
                <b>(iv)</b> To provide analytics to understand how our Service is used.</p> <br />
              <h4>8. STORAGE OF PERSONAL DATA</h4>
              <p>We take the security of the Personal Data we collect very seriously, and we
                take
                reasonable
                measures to reduce the risk of accidental destruction, loss, or unauthorized
                access to such
                information. However, please note that no system involving the transmission of
                information via
                electronic storage systems or the internet is completely secure.
                The Personal Data and any other information we have about You may be stored for
                such period
                as we may determine until You withdraw Your consent.
                Note that You can withdraw Your consent to store Your Personal Data at any time.
                Once this is
                done, all Personal Data and information we have about You will be deleted.</p>
              <h4>9. PROTECTION OF PERSONAL DATA</h4>
              <p>Our Service is built with strong security features that continuously protect
                Your Personal Data.
                Our security features help us detect and block security threats. If we detect
                any security risk, we
                may inform You and guide You through steps to stay protected.</p>
              <h4>10. DISCLOSURE OF PERSONAL DATA</h4>
              <p>We do not disclose Your Personal Data except for any of the following reasons: <br />
                <b>(i)</b> If You have granted us the permission to do so: We will disclose Your
                Personal Data
                where we have received Your unequivocal consent and permission to do so. However,
                such consent may be withdrawn at any time. <br />
                <b>(ii)</b> For the purposes of processing Your Personal Data: We may disclose Your
                Personal <br />
                Data to trusted businesses or persons for the purpose of processing Your
                Personal Data
                for us, based on our instruction and in compliance with our Privacy Policy.<br />
                <b>(iii)</b> For any other reason that may be necessary for the operation of our Website.
              </p>
              <h4>11. LINKS TO THIRD PARTY SITES/SERVICES</h4>
              <p>The website may contain links to other websites which we believe may offer
                useful information.
                These linked websites are not under our control and this Privacy Policy does not
                apply to these
                websites. We suggest that You contact those websites directly for information on
                their privacy
                policy, security, data collection, and distribution policies.</p>
              <h4>12. ACCESSING, MODIFYING AND DELETING YOUR PERSONAL DATA</h4>
              <p>If you wish to access, review, or modify any information we have about You,
                You
                may do so by
                simply contacting us at the following email address: support@votecity.ng. You
                may also request
                that we delete any information belonging to You that we have stored.</p>

              <h4>13. YOUR RIGHTS</h4>
              <p>Your rights in relation to Your Personal Data are as follows: <br />
                <b>(i)</b> The right to have access to Your Personal Data. <br />
                <b>(ii)</b> The right to be informed about the processing of Your Personal Data. <br />
                <b>(iii)</b> The right to rectify any inaccurate Personal Data or any information about
                You. <br />
                <b>(iv)</b> The right to review, modify or erase Your Personal Data and any other
                information we
                have about You. <br />
                <b>(v)</b> The right to restrict the processing of Your Personal Data. <br />
                <b>(vi)</b> The right to block Personal Data processing in violation of any law. <br />
                <b>(vii)</b> The right to be informed about any rectification or erasure of Personal
                Data or
                restriction of any processing carried out. <br />
                <b>(viii)</b> The right to the portability of Your Personal Data. <br />
                <b>(ix)</b> The right to lodge a complaint with a supervisory authority within Nigeria.</p>
              <h4>14. CONTACT INFORMATION</h4>
              <p>If You have any questions regarding this Privacy Policy or the Personal Data we
                collect, or if
                You wish to make any comments or complaints about anything related to this
                Privacy Policy,
                please contact us at the following email address: support@votecity.ng.</p>
              <button className='btn' onClick={handleClose}>close</button>
            </div>

          )}
          {isOpenn && (
            <div className="popup">
              <h3>WEBSITE TERMS AND CONDITIONS</h3>
              <h5>Effective date: December 12, 2024</h5>
              <p> These terms and conditions apply to You, the user of this website (including any sub-domains,
                unless expressly excluded by their own terms and conditions), and Votecity Limited, the owner
                and operator of the following website: votecity.ng(the "Website"), with the following URL web
                address: <a href=""> www.votecity.ng</a></p> <br />
              <h5>PLEASE READ THE TERMS AND CONDITIONS CAREFULLY as they affect Your legal rights.</h5>
              <h4>1. Definitions</h4>
              <p><b>"Parties"</b> means Both You (the user of the Service) and the Owner of this Service. <br />
                <b>"Content"</b> means any content, writing, images, audiovisual content, or other information
                published on this Service. <br />
                <b>"Materials"</b> means any materials, information, or documentation that we may provide to You in
                connection with Your use of the Products, including documentation, data, information developed
                for any use, and other materials that may assist in Your use of the Goods or Service. <br />
               <b> "Terms"</b> means these terms and conditions. <br />
                <b>"Service"</b> means the website, including all pages, subpages, all blogs, forums, and other
                connected internet content whatsoever.</p>
              <h4>2. About this Website</h4>
              <p>This Website is comprised of various web pages operated by Votecity Limited.
                This Service is offered to You upon Your acceptance of the Terms, conditions, and notices
                hereinafter contained. Your use of this Service constitutes Your agreement to all the Terms
                contained herein.</p>
              <h4>3. Agreement</h4>
              <p><b>a.</b> By using this Website, You acknowledge that You have reviewed and considered the Terms
                of this Agreement, understand them, and agree to be bound by them. If You do not agree with
                these Terms or do not intend to be bound by them, You must quit the use of this Website
                immediately. In addition, when using this Service, You shall be subject to any posted guidelines
                or rules applicable to such services. Accordingly, any participation in this Service shall constitute
                acceptance of this Agreement.</p>
              <h4>4. Acceptable Use</h4>
              <p><b>a.</b> We hereby grant You the license to use our Service for Your personal, non-commercial use
                to retrieve, display, and view the Content on a computer screen.</p>
              <p><b>b.</b> The license created under these Terms is limited, non-exclusive, non-transferable, and
                revocable.</p>
              <p><b>c.</b> You agree that You will not use the Contents or Materials for any other purpose which may be
                contrary to your license to use this Service.</p>
              <p><b>d.</b> Any unauthorized use by You shall terminate the permission or license granted by this
                Website.</p>
              <h4>5. Prohibited Use</h4>
              <p><b>a.</b> You are expressly prohibited from collecting, downloading, copying, or otherwise
                communicating with other Users from the Website. <br />
                <b>b.</b> You agree not to use the Service in the following manner: <br />
                <b>(i)</b> to harass, abuse, or threaten others or otherwise violate any person's legal rights; <br />
                <b>(ii)</b> to perpetrate fraud; <br />
                <b>(iii)</b> to create or transmit unnecessary spam to any person or URL; <br />
                <b>(iv)</b> to post, transmit, or cause to be posted or transmitted, any communication or
                solicitation designed to obtain passwords, accounts, or private information of other Users
                or persons; <br />
                <b>(v)</b> to post copyrighted content which does not belong to You and without obtaining the
                prior consent of the author; <br />
                <b>(vi)</b> to use a robot, spider, scraper, or other automated means to access this Service
                without obtaining the prior consent of the Owner; <br />
                <b>(vii)</b> to engage in or create any unlawful gambling, sweepstakes, or scheme; <br />
                <b>(viii)</b> publishing or distributing any obscene or defamatory material; <br />
                <b>(ix)</b> using this Service in any way that impacts user access to the Website; <br />
                <b>(x)</b> to engage in advertisement or solicit any User to buy or sell products or services <br />
                without obtaining the prior consent of the Owner; <br />
                <b>(xi)</b> disseminating computer viruses or other software; <br />
                <b>(xii)</b> violating any intellectual property rights of the Owner or any third party; <br />
                <b>(xiii)</b> to use the Website or any of the Services for illegal spam activities. <br />
                <b>c.</b> Additionally, you agree that You will not do as follows: <br />
                <b>(i)</b> interfere or attempt to interfere with the proper working of this Website; or <br />
                <b>(ii)</b> bypass any measures we may use to prevent or restrict access to this Website; <br />
                <b>(iii)</b> to interfere with or circumvent the security features of this Service; <br />
                <b>(iv)</b> to damage, disable, overburden or impair this Service or any other person's use of this
                Service. <br />
                <b>(v)</b> to use this Service contrary to the applicable laws and regulations or in a way that
                causes, or may cause harm to this Website, any person or business entity. We reserve
                the right to terminate Your use of the Service for violating any of the prohibited uses.</p>
              <h4>6. Intellectual Property Ownership</h4>
              <p><b>a.</b> You agree that we retain ownership of all Content included on the Website (text, graphics,
                video, software, data, page layout, images, and any other information capable of being stored in
                a computer) other than the content uploaded by users. <br />
                <b>b.</b> You are granted a limited license only, subject to the restrictions provided in these Terms.
                Nothing on this Website shall be construed as granting any license or right to use any trademark
                or logo displayed on the Website without obtaining the prior written consent of the Owner. <br />
                <b>c.</b> You hereby agree not to reproduce or distribute the Owner's intellectual property or use the
                intellectual property for any unlawful purpose.</p>
              <h4>7. Privacy Policy</h4>
              <p>Our privacy policy explains how we treat Your personal data and protect Your privacy when You
                use our Service. By using our Service, You agree that the Owner can use such data in the
                manner described in our Privacy Policy.</p>
              <h4>8. Links to Third Party Sites/Services</h4>
              <p>The website may contain links to other websites. These Linked Sites are not under our control
                and You agree that we are not liable for the contents of any Linked Sites or links contained in
                any Linked Site.</p>
              <h4>9. Electronic Communications</h4>
              <p>You consent to receive electronic communications and You agree that all agreements, notices,
                disclosures, and other communications we provide to You electronically, via email and on this
                Website, satisfy any legal requirements that communications must be in writing.</p>
              <h4>10. Reverse Engineering and Security</h4>
              <p>You hereby agree as follows: <br />
                <b>(I)</b> not to reverse engineer or permit the reverse engineering or disassemble any code or
                software from or on the Website or Services; and <br />
                <b>(II)</b> not to violate the Security of the Website or other Services through any unauthorized
                access, circumvention of encryption or other security tools, data mining, or interference
                with any host or User or network.</p>
              <h4>11. Change to Service</h4>
              <p><b>a.</b> You accept that the Owner may vary, alter, amend, or update the Content or Service at any
                time and without Your consent. <br />
                <b>b.</b> You also agree that the Service may not be available at all times and this may be due to
                maintenance or for any other reason, and we shall not be held liable for the failure to provide
                this Service.</p>
              <h4>12. Indemnification</h4>
              <p>You hereby agree to indemnify the Owner, its employees, agents, and third parties from and
                against all liabilities, costs, demands, causes of action, damages, and expenses (including
                reasonable attorney's fees) arising out of Your use or inability to use, Your violation of any rights
                of a third party, and Your violation of applicable laws, rules, or regulations.</p>
              <h4>13. No Warranties</h4>
              <p>You agree that You use this Website solely at Your risk as the Owner does not warrant the
                accuracy of the contents in this Website. You assume all the risks of viewing, reading, or
                downloading the contents of this Website.
                The Owner expressly disclaims all express and implied warranties, such as the implied warranty
                of merchantability, as the Owner makes no warranties that the Website or other Services will be
                accurate, error-free, secure, or uninterrupted.
                The Owner makes no warranty about the suitability, reliability, availability, timeliness, and
                accuracy of the information, Contents, and other materials contained herein for any purpose.
                The Owner hereby disclaims all warranties and conditions with regard to the information,
                software, Products, related graphics, and materials, including all implied warranties or
                conditions of merchantability, fitness for a particular purpose, title, and non-infringement.
                You also agree that the Owner and its affiliates shall not be liable for any direct, indirect,
                punitive, and all consequential damages or any damages whatsoever, including but not limited
                to damages for loss of use, data, or profits, the failure to provide Services, or for any
                information, software, Products, Services, related graphics, and materials obtained through this
                Website, or otherwise arising out of the use of this Website, whether based on contract,
                negligence, strict liability, or otherwise.</p>
              <h4>14. Service Interruptions</h4>
              <p>The Owner may from time to time interrupt Your access to or use of this Website to perform
                some maintenance or emergency services, and You agree that the Owner shall not be held
                liable for any damage or loss which may arise thereof.</p>
              <h4>15. Termination/Restriction of Access</h4>
              <p>The Owner reserves the right to, at its sole discretion, terminate Your access to this Website
                and the related Service or any part thereof at any time, for any reason and without notice.
                The Owner shall have the right to terminate or terminate/suspend Your account for violating the
                Terms of this Service.
                If You register with us, You may terminate this Service at any time by issuing a prior notice to
                us. Once this is done, You will no longer be bound by the provisions of these Terms.</p>
              <h4>16. General Provisions</h4>
              <p><b>a.</b> Assignment: The Owner shall be permitted to assign and transfer its rights and/or obligations
                under these Terms. However, You shall not be permitted to assign or transfer any rights and/or
                obligations under these Terms. <br />
                <b>b.</b> Entire Agreement: These Terms, disclaimers, and any other agreement relating to the use of
                this Website constitute the entire agreement and shall supersede any other agreement. <br />
                <b>c.</b> Separate Agreements: You may have other legal agreements with us. Those agreements are
                separate from these Terms. These Terms are not intended to alter, amend, revise, or replace
                the terms of the other agreement. <br />
                <b>d.</b> Applicable Law: These Terms may be governed and construed in accordance with the laws,
                regulations, or guidelines of the Federal Republic of Nigeria and other treaties or regulations
                which are applicable in Nigeria.</p>
              <button className='btn' onClick={handleClosen}>close</button>
            </div>
          )}
        </div>
        <div>
          <p id='pim' style={{ textAlign: "center", marginTop: "20px" }}>Copyright © Votecity Ltd <br /> All rights reserved
          </p>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks