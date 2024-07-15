import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PropsWithChildren } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, ListItem, ListItemFrame, ListItemText, ScrollView, Stack, Text, XStack, styled } from "tamagui";
import DrawerScreen from "./components/DrawerScreen";
import React from "react";
import { View } from "react-native";

const Header = styled(Text, {
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 22,
});

const SectionHeader = styled(Text, {
    fontWeight: "700",
    textAlign: 'left',
    fontSize: 14,
    lineHeight: 20,
    textDecorationLine: "underline",
});

const Bold = styled(Text, {
    fontWeight: "700",
});

const Link = styled(Text, {
    textDecorationLine: "underline",
});

const TextBlock = styled(Text, {
    lineHeight: 22,
    paddingHorizontal: 20,
    textAlign: 'justify',
});

const RowItem = (props: PropsWithChildren & { alpha: string, text: string }): JSX.Element => {
    return <XStack paddingHorizontal={20} marginBottom={10}>
        <Text lineHeight={20} marginRight={20}>{props.alpha}</Text>
        <Text lineHeight={20} flex={1}>{props.text}</Text>
    </XStack>
}

const nope = [
    "Counterfeit products or any product or Service that infringes upon the copyright, trademark, or trade secrets of any third party;",
    "Stolen goods;",
    "Narcotics, controlled substances, prescription and pharmaceutical services, drug paraphernalia, or any substances designed to mimic illegal drugs;",
    "Prostitution or illegal escort services",
    "Violent acts towards self or others, or activities or items that encourage, promote, facilitate or instruct others regarding the same;",
    "Funding any of the items included on this Prohibited Businesses list;",
    "Extortion and blackmail",
    "Unlicensed sale of firearms and certain weapons;",
    "Engaging in deceptive marketing practices; or",
    "any business that violates any law, statute, ordinance, or administrative regulation.",
];

const conform = [
    "Violate or assist any party in violating any law, statute, ordinance, regulation or any rule of any self-regulatory or similar organization of which you are or are required to be a member (for example, those laws, rules, or regulations governing financial services, controlled substances, or consumer protections);",
    "Partake in a transaction that involves the proceeds of any unlawful activity;",
    "Defraud or attempt to defraud SafeHer App or other SafeHer App users;",
    "Infringe upon SafeHer App’s or any third party’s copyright, patent, trademark, or intellectual property rights;",
    "Provide false, inaccurate, or misleading information;",
    "Take any action that imposes an unreasonable or disproportionately large load on our infrastructure, or detrimentally interferes with, intercepts, or expropriate any system, data, or information;",
    "Interfere with another individual’s or entity’s access to or use of any of the SafeHer App Services;",
    "Defame, abuse, harass, stalk, threaten, or otherwise violate or infringe the legal rights (such as, but not limited to, rights of privacy, publicity, and intellectual property) of others;",
    "Publish, distribute or disseminate any unlawful material or information;",
    "Transmit or upload any material to the SafeHer App Site that contains viruses, Trojan horses, worms, or any other harmful or deleterious programs;",
    "Harvest or otherwise collect information from the SafeHer App’s Site about others, including without limitation email addresses, without proper consent;",
    "Transfer any rights granted to you under this Agreement;",
    "Use the SafeHer App Account information of another party to access or use the SafeHer App Site, except in the case of specific merchants and/or applications that are specifically authorized by a user to access such user’s SafeHer App Account and information;",
    "Otherwise attempt to gain unauthorized access to SafeHer App’s system, other SafeHer App accounts, computer systems, or networks connected to SafeHer App’s applications, through password mining or any other means;",
    "Engage in transactions involving items that infringe or violate any copyright, trademark, right of publicity or privacy, or any other proprietary right under the law;",
    "Take any action that SafeHer App deems as circumventing SafeHer App controls, including, but not limited to, opening multiple SafeHer App Accounts or abusing promotions which SafeHer App may offer from time to time;",
];

function TermsAndPrivacyScreen(props: PropsWithChildren & NativeStackScreenProps<any>): JSX.Element {

    const { navigation } = props;

    return <DrawerScreen
        active="terms"
    >
        <View style={{
            height: "100%",
            backgroundColor: "white",
        }}>
            <ScrollView>
                <Stack height={20} />
                <Header textAlign="center">TERMS OF USE and Data Privacy</Header>
                <Header textAlign="center">SafeHer App</Header>
                <Stack height={12} />
                <ListItem justifyContent="flex-start" icon={<Text>1.</Text>}><SectionHeader>DEFINITION OF TERMS</SectionHeader></ListItem>
                <TextBlock>
                    <Bold>“Agreement”</Bold> means these Terms of Use.{'\n'}
                    <Bold>“SafeHer App”</Bold> means a non-profit service application designed and developed to enhance commuting safety of women{'\n'}
                    <Bold>“Confidential Information”</Bold> includes all information exchanged between the parties to this Agreement, whether in writing, electronically, or orally, including the Service but does not include information that is, or becomes, publicly available other than through unauthorized disclosure by the other party.{'\n'}
                    <Bold>“Data”</Bold> means any data inputted by You or with Your authority into the App.{'\n'}
                    <Bold>“Intellectual Property Right”</Bold> means any patent, trademark, service mark, copyright, moral right, right in a design, know-how, and any other intellectual or industrial property rights, anywhere in the world whether or not registered.{'\n'}
                    <Bold>“Service”</Bold> means the mobile app that is used for safety precautions in commuting using artificial intelligence (AI) and machine learning, and geo-location.{'\n'}
                    <Bold>“Mobile App”</Bold> means the application at the domain <Link>https://safeher.com</Link> or any other site operated by SafeHer App.{'\n'}
                    <Bold>“You”</Bold> meaning the user who downloaded and used SafeHer services.
                </TextBlock>

                <ListItem justifyContent="flex-start" icon={<Text>2.</Text>}><SectionHeader>AGREEMENT TO THESE TERMS</SectionHeader></ListItem>
                <TextBlock marginBottom={14}>
                    By signing up to use the SafeHer App’s Services, you agree to comply with and be legally bound by this Agreement, as revised from time to time. If you do not agree to any of the terms set forth in this Agreement, or any subsequent modification to the Agreement, you may not access or use any of SafeHer App’s Services.
                </TextBlock>
                <TextBlock marginBottom={12}>
                    We may amend or modify this Agreement by posting on the SafeHer App’s website, mobile application, or emailing you the revised Agreement, and the revised Agreement shall be effective at such time. We may (a) modify or discontinue any portion of the SafeHer App Services, and (b) suspend or terminate your access to the SafeHer App Services, at any time, and from time to time, without notice to you in certain, limited circumstances described herein. You agree that we shall not be liable to you or any third party for any modification or termination of the SafeHer App Services, or suspension or termination of your access to the SafeHer App Services, except to the extent otherwise expressly set forth herein.
                </TextBlock>
                <TextBlock>
                    By using SafeHer App services, you are instructing us to share your data across our platform for eligibility verification, and other legitimate purposes described in our Privacy Policy, consistent with applicable law. This data may include credit information and other information we obtain from third parties. SafeHer App will not share your data without your explicit and informed consent, as required by law.
                </TextBlock>
                <TextBlock>To access and/or use the Platform, you acknowledge and agree to the terms and conditions of this agreement (“Agreement”), which include:</TextBlock>
                <TextBlock>
                    •{'    '}SafeHer App’s Privacy Policy{'\n'}
                    •{'    '}The current version of the terms set out; and{'\n'}
                    •{'    '}Any additional provisions and conditions provided separately to you for your use of the Platform, which may include terms and conditions from third parties (which we refer to as “Additional Terms”){'\n'}
                    •{'    '}You are at least 18 years of age;{'\n'}
                    •{'    '}You are capable of forming a binding contract with SafeHer App; and{'\n'}
                    •{'    '}You are not a person who is prohibited from using the Platform under the laws of the Philippines or any other applicable jurisdiction.
                </TextBlock>

                <ListItem justifyContent="flex-start" icon={<Text>3.</Text>}><SectionHeader>SERVICE</SectionHeader></ListItem>
                <TextBlock>
                    The Service is a mobile application that is free and available through iOS and Android. It features A.I. triggered security functions by detection scream or crash, ability to share live location, report incidents, and save medical information.
                    {'\n\n'}
                    Depending on your country of residence, you may not be able to use all the functions of the Service. It is your responsibility to follow those rules and laws in your country of residence and/or the country from which you access the Services. As long as you agree to and comply with these Terms of Use, SafeHer App grants you the personal, non-exclusive, non-transferable, non-sublicensable, and limited right to enter and use the Site and the Service.
                </TextBlock>

                <ListItem justifyContent="flex-start" icon={<Text>4.</Text>}><SectionHeader>USE OF SOFTWARE</SectionHeader></ListItem>
                <TextBlock>
                    SafeHer App grants You the right to access and use the Service via its mobile application with the particular features available to You.. This right is non-exclusive, non-transferable, and limited by and subject to this Agreement. You acknowledge and agree that your access and use of the Service shall be subject to the Terms of Use, any applicable written agreement, or any other applicable laws.
                    {'\n\n'}
                    You further acknowledge that submitted data will be shared with third party Local Government Units or National Government Agencies in the Philippines to carry out support cause by SafeHer App features.
                    {'\n\n'}
                    <Bold>No Warranty.</Bold> We do not represent that SafeHer App and/or the SafeHer App Services will be available without interruption. Although we will strive to provide you with continuous operations, we do not guarantee continuous access or that there will be no delays, failures, errors, omissions, or loss of transmitted information, nor do we guarantee that any order will be executed, accepted, recorded, or remain open. YOU FURTHER ACKNOWLEDGE THAT INFORMATION YOU STORE OR TRANSFER THROUGH OUR SERVICES MAY BECOME IRRETRIEVABLY LOST OR CORRUPTED OR TEMPORARILY UNAVAILABLE DUE TO A VARIETY OF CAUSES, INCLUDING SOFTWARE FAILURES, PROTOCOL CHANGES BY THIRD-PARTY PROVIDERS, INTERNET OUTAGES, FORCE MAJEURE EVENTS, OR OTHER DISASTERS INCLUDING THIRD-PARTY DDOS ATTACKS, SECURITY BREACH, SCHEDULED OR UNSCHEDULED MAINTENANCE, OR OTHER CAUSES EITHER WITHIN OR OUTSIDE OUR CONTROL. YOU ARE SOLELY RESPONSIBLE FOR BACKING UP AND MAINTAINING DUPLICATE COPIES OF ANY INFORMATION YOU STORE OR TRANSFER THROUGH OUR SERVICES.
                    {'\n\n'}
                    By engaging the services of SafeHer App, you expressly consent to the use of any personal information, sensitive or otherwise, consistent with the provisions of Republic Act No. 10173 otherwise known as the “Data Privacy Act of 2012”.
                    {'\n\n'}
                </TextBlock>
                <Bold paddingHorizontal={20} marginBottom={12}>Prohibited Businesses And Prohibited Use{'\n'}</Bold>
                <TextBlock>
                    The following categories of businesses, business practices, and sale items are barred from accessing the Services (“Prohibited Businesses”). By opening a SafeHer App account, you confirm that you will not use the Services in connection with the following businesses, activities, practices, or items:
                </TextBlock>
                {nope.map((item, index) => <RowItem alpha={`${String.fromCharCode(97 + index)}.`} text={item} />)}
                <TextBlock>
                    You may not use SafeHer App’s Services to engage in the following categories of activity (“Prohibited Use”). By opening an account with SafeHer App, you confirm that you will not use your account to do any of the following:{'\n'}
                </TextBlock>
                {conform.map((item, index) => <RowItem alpha={`${String.fromCharCode(97 + index)}.`} text={item} />)}

                <ListItem justifyContent="flex-start" icon={<Text>5.</Text>}><SectionHeader>MODIFICATIONS</SectionHeader></ListItem>
                <TextBlock>
                    The provisions of this Agreement may be modified at any time. The notifications for these changes will be posted through the mobile application, on our website, or through other platforms we currently implement. It is important that you review this Agreement whenever we modify it because your continued use of the Service indicates your agreement to the modifications. We may modify, suspend or discontinue the Service at any time. You agree that we will not be liable to you or any third party for any modification, suspension, or discontinuance of the Service.
                    {'\n\n'}
                    In some cases, you may need to accept changes to this Agreement to continue using the application. If you do not agree to the changes, you may stop using the mobile app or terminate your account.
                </TextBlock>

                <ListItem justifyContent="flex-start" icon={<Text>6.</Text>}><SectionHeader>ACCOUNT REGISTRATION</SectionHeader></ListItem>
                <TextBlock>
                    To access most features of the Service, you must register for an account. When you register for an account, you may be required to provide us with some information about yourself, such as your name, email address, or other contact information. You agree that the information you provide to us is accurate, complete, and not misleading and that you will keep it accurate and up to date at all times. When you register, you will be asked to create a password. You are solely responsible for maintaining the confidentiality of your account and password, and you accept responsibility for all activities that occur under your account. If you believe that your account is no longer secure, then you should immediately notify us at contact@safeher.com; You agree to notify SafeHer App immediately if you become aware of any unauthorized use of the Services or any other breach of security regarding the Services. SafeHer App will not be liable for any loss or damage arising from your failure to protect your account or user data.
                </TextBlock>

                <ListItem justifyContent="flex-start" icon={<Text>7.</Text>}><SectionHeader>INDEMNIFICATIONS</SectionHeader></ListItem>
                <TextBlock>
                    You shall not hold SafeHer App responsible or liable for any loss or damage which You may incur or suffer directly or indirectly arising out of or in connection with SafeHer App due to any reason whatsoever including but not limited to breakdown or malfunction of the computer, its terminal connection lines, data processing system or transmission line whether or not belonging to SafeHer App or any circumstances beyond SafeHer App’s control.
                </TextBlock>

                <ListItem justifyContent="flex-start" icon={<Text>8.</Text>}><SectionHeader>A.I TRIGGERED SECURITY FEATURES</SectionHeader></ListItem>
                <Stack paddingLeft={20}>
                    <SectionHeader paddingLeft={20} marginBottom={10}>SCREAM DETECTION</SectionHeader>
                    <TextBlock marginBottom={10}>You agree to have your device’s microphone and record audio used for the purpose of detecting a scream while the app is active. This enables the SafeHer app to detect audio recorded as a scream and will trigger emergency protocols set by You. Recorded audio is then stored externally for processing the audio to detect the scream.</TextBlock>

                    <SectionHeader paddingLeft={20} marginBottom={10}>CRASH DETECTION</SectionHeader>
                    <TextBlock marginBottom={10}>You agree to have your device’s motion settings be used for the purpose of detecting a crash while the app is active. This enables the SafeHer App to detect your device’s motion should there be a crash and will trigger emergency protocols set by You. Recorded motion is then stored externally for processing the audio to detect the scream.</TextBlock>

                    <SectionHeader paddingLeft={20} marginBottom={10}>LIVE LOCATION SHARING</SectionHeader>
                    <TextBlock marginBottom={10}>You agree that this is an optional feature where You enable your live location settings to be connected into the app for the purpose of sharing it with your emergency contacts through the SafeHer app. </TextBlock>

                    <SectionHeader paddingLeft={20} marginBottom={10}>USE OF CAMERA</SectionHeader>
                    <TextBlock marginBottom={10}>You agree to enable the use of your device’s camera as one of the security measures triggered by the SafeHer App</TextBlock>

                    <SectionHeader paddingLeft={20} marginBottom={10}>USE OF CONTACTS</SectionHeader>
                    <TextBlock marginBottom={10}>You agree to be able to choose from your device’s contacts and set chosen contacts as emergency contacts inside SafeHer App. This is one of the security features triggered by the App when in distress.</TextBlock>

                    <SectionHeader paddingLeft={20} marginBottom={10}>STORAGE OF DATA</SectionHeader>
                    <TextBlock marginBottom={5}>Data shared by You can include the following information and its uses inside the SafeHer App:</TextBlock>
                    <TextBlock marginBottom={10}>
                        •{'    '}Medical information: SafeHer may collect medical records for the purpose of storing medical details in case it will be used by partner authorities due to accidents involving You.{'\n'}
                        •{'    '}Account Creation: SafeHer App will require personal data such as email address, contact number, First Name and Last Name,for the purpose of verifying Your authenticity.
                    </TextBlock>

                    <SectionHeader paddingLeft={20} marginBottom={10}>ARTIFICIAL INTELLIGENCE</SectionHeader>
                    <TextBlock marginBottom={5}>A.I. is used to trigger security protocols after detecting scream or crash. This includes the following:</TextBlock>
                    <TextBlock marginBottom={10}>
                        •{'    '}Flashing of device flashlight{'\n'}
                        •{'    '}Auto camera snaps in front and back{'\n'}
                        •{'    '}Auto sending of SMS to emergency contacts
                    </TextBlock>
                </Stack>

                <ListItem justifyContent="flex-start" icon={<Text>9.</Text>}><SectionHeader>APPLICATION DOWNTIMES</SectionHeader></ListItem>
                <TextBlock>It is a common occurrence that applications and certain software will experience unexpected and scheduled downtimes. This may be due to a number of different reasons such as system maintenance, upgrades, and other technological matters. To check for any app downtimes, please go to this website: www.safeher.com</TextBlock>

                <ListItem justifyContent="flex-start" icon={<Text>10.</Text>}><SectionHeader>COMMUNITY</SectionHeader></ListItem>
                <TextBlock>SafeHer App encourages its users to utilize the report function to report incidents to the authorities. The community within the app serves as a platform for communication and sharing ideas with one another. Thus, the contributions made by other subscribers do not reflect the views and opinions of the founders and developers of the application; as these are solely at their personal discretion. We take no responsibility for and we do not expressly or implicitly endorse, support, or guarantee the completeness, truthfulness, accuracy, or reliability of any of their content.</TextBlock>

                <ListItem justifyContent="flex-start" icon={<Text>11.</Text>}><SectionHeader>INTELLECTUAL PROPERTY RIGHTS</SectionHeader></ListItem>
                <TextBlock>“SafeHer” and all logos related to the SafeHer App Services and/or SafeHer App Services are either trademarks or registered marks of SafeHer App, their registered owners, or its licensors. The Trademarks and Material should not be copied, reproduced, modified, republished, uploaded, posted, transmitted, scraped, collected, or distributed in any form or by any means, whether manual or automated. The use of any such Materials on any other Site or networked computer environment for any other purpose is strictly prohibited; any such unauthorized use may violate copyright, trademark, and other applicable laws and could result in criminal or civil penalties.</TextBlock>

                <ListItem justifyContent="flex-start" icon={<Text>12.</Text>}><SectionHeader>DISPUTES</SectionHeader></ListItem>
                <TextBlock marginBottom={10}><Bold>Indemnification.</Bold> You agree to indemnify and hold SafeHer App, its parent, the officers, directors, agents, joint venturers, and employees harmless from any claim or demand (including attorneys’ fees) arising out of your breach of this Agreement or your use of SafeHer App Services.</TextBlock>
                <TextBlock marginBottom={10}><Bold>Release of SafeHer App.</Bold> If you have a dispute with one or more users, you release SafeHer App (and our parent, officers, directors, agents, joint ventures, employees, and suppliers) from any and all claims, demands, and damages (actual and consequential) of every kind and nature arising out of or in any way connected with such disputes. In addition, this release extends to claims that the creditor does not know or suspect to exist in his favor at the time of executing the release, which if not known by him must have materially affected his settlement with the debtor.</TextBlock>
                <TextBlock marginBottom={10}><Bold>Disputes with SafeHer App.</Bold> If you think we have made an error, email us at contact@safeher.com. In your correspondence, you must give us information sufficient to identify you, your account, and the transaction on which you believe an error occurred. You must contact us within thirty (30) days after the transaction occurred. Within thirty (30) days of receiving your request, we must either correct the error or explain to you why we believe the transaction was correct.</TextBlock>
                <TextBlock marginBottom={10}><Bold>Service Level Commitment on Complaints and Disputes.</Bold> Within fifteen (15) business days of our receipt of your complaint, a Customer Assistance Officer will address all points raised in your complaint by sending you an email ("Resolution Notice") in which the Officer will: (i) offer to resolve your complaint in the way you requested; (ii) make a determination rejecting your complaint and set out the reasons for the rejection; or (iii) offer to resolve your complaint with an alternative solution. In exceptional circumstances, if the Officer is unable to respond to your complaint within 15 business days for reasons beyond SafeHer App's control, the Officer will send you a holding reply indicating the reasons for the delay in answering your complaint and specifying the deadline by which the Officer will respond to your complaint (which will be no later than 30 days from our receipt of your complaint. Any offer of resolution made to you will only become binding on us if accepted by you. An offer of resolution will not constitute any admission by us of any wrongdoing or liability regarding the subject matter of the complaint.</TextBlock>

                <ListItem justifyContent="flex-start" icon={<Text>13.</Text>}><SectionHeader>CONTACT DETAILS</SectionHeader></ListItem>
                <TextBlock marginBottom={10}>SafeHer App Customer Service Email: contact@safeher.com</TextBlock>

                <ListItem justifyContent="flex-start" icon={<Text>14.</Text>}><SectionHeader>GENERAL PROVISIONS</SectionHeader></ListItem>
                <TextBlock marginBottom={10}><Bold>Limitations of Liability.</Bold> IN NO EVENT SHALL WE, OUR TEAM, THE OFFICERS, DIRECTORS, AGENTS, JOINT VENTURERS, EMPLOYEES AND SUPPLIERS OF SafeHer App OR OUR PARENT BE LIABLE FOR ANY SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN CONNECTION WITH OUR WEBSITE, SafeHer App SERVICES, OR THIS AGREEMENT (HOWEVER ARISING, INCLUDING NEGLIGENCE). OUR LIABILITY, AND THE LIABILITY OF OUR PARENT COMPANY, OFFICERS, DIRECTORS, AGENTS, JOINT VENTURERS, EMPLOYEES AND SUPPLIERS, TO YOU OR ANY THIRD PARTIES IN ANY CIRCUMSTANCE IS LIMITED TO THE ACTUAL AMOUNT OF DIRECT DAMAGES.</TextBlock>
                <TextBlock marginBottom={10}><Bold>No Warranty.</Bold> SafeHer App SERVICES ARE PROVIDED “AS IS” AND WITHOUT ANY REPRESENTATION OF WARRANTY, WHETHER EXPRESS, IMPLIED OR STATUTORY. SafeHer App, OUR PARENT, THE OFFICERS, DIRECTORS, AGENTS, JOINT VENTURERS, EMPLOYEES AND SUPPLIERS OF SafeHer App OR OUR PARENT SPECIFICALLY DISCLAIM ANY IMPLIED WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. SafeHer App does not have any control over the products or services that are paid for with SafeHer App Services and SafeHer App cannot ensure that a buyer or a seller you are dealing with will actually complete the transaction or is authorized to do so. SafeHer App does not guarantee continuous, uninterrupted or secure access to any part of SafeHer App Services, and operation of our site may be interfered with by numerous factors outside of our control. SafeHer App will make reasonable efforts to ensure that requests for electronic debits and credits involving bank accounts and check issuances are processed in a timely manner but SafeHer App makes no representations or warranties regarding the amount of time needed to complete processing because SafeHer App Services are dependent upon many factors outside of our control, such as delays in the banking system. </TextBlock>
                <TextBlock marginBottom={10}><Bold>Force Majeure.</Bold> We shall not be liable for delays, failure in performance or interruption of Service which result directly or indirectly from any cause or condition beyond our reasonable control, including but not limited to, any delay or failure due to any act of God, act of civil or military authorities, acts of terrorists, civil disturbance, war, strike or other labor dispute, fire, interruption in telecommunications or Internet Services or network provider Services, failure of equipment and/or software, blockchain network congestion, contentious hard forks, catastrophic blockchain or smart contract code error and other catastrophes or any other occurrences which are beyond our reasonable control.</TextBlock>
                <TextBlock marginBottom={10}><Bold>Dispute Resolution; Arbitration.</Bold> All disputes, issues, controversies, or differences arising out of or in connection with this Agreement shall first be resolved amicably within thirty (30) calendar days after written notice thereof has been given by the complaining party to the counterparty. Disputes, controversies, or claims arising out of or in connection with this Agreement that is not resolved within 30 calendar days shall be referred to and settled by a tribunal comprised of one (1) arbitrator to be appointed by the Philippine Dispute Resolution Center, Inc. (PDRCI); The seat of arbitration will be Makati City, Philippines, the location determined by the PDRCI, the language of the arbitration will be English and the rules established by the PDRCI shall govern the process.  The arbitration tribunal will have the right to issue injunctions and its decision will be compulsory, final, and strictly mandatory to the parties who in turn waive any other jurisdiction or venue that may apply and agree to be subject to the arbitral decision waiving any appeals of any type.</TextBlock>
                <TextBlock marginBottom={10}><Bold>Time Limitation on Claims.</Bold> You agree that any claim you may have arising out of or related to your relationship with SafeHer App must be filed within one (1) year after the date of the relevant transaction, whichever is earlier; otherwise, your claim is permanently barred.</TextBlock>
                <TextBlock marginBottom={10}><Bold>Export Controls & Sanctions.</Bold> SafeHer App Services are subject to the Philippines and international export controls and economic sanctions requirements. By availing of SafeHer App’s Services, you represent and warrant that you are not a resident of any of the restricted jurisdictions below. Without limiting the foregoing, you may not avail of any of the SafeHer App Services if: (1) you are in, under the control of, or a national or resident of Cuba, Iran, North Korea, Sudan or Syria or any other country subject to United States embargo, UN sanctions, HM Treasury’s financial sanctions regime, or if you, or your cryptocurrency wallet address, or the cryptocurrency wallet address of your intended recipient or the source of your cryptocurrency, are on the U.S. Treasury Department’s Specially Designated Nationals List or the U.S. Commerce Department’s Denied Persons List, Unverified List, Entity List HM Treasury’s financial sanctions regime; or (2) you intend to supply the acquired digital currency or SafeHer App Services to Cuba, Iran, North Korea, Sudan or Syria or any other country subject to United States embargo or UN sanctions (or a national or resident of one of these countries), or to a person on the Specially Designated Nationals List, Denied Persons List, Unverified List, Entity List, or HM Treasury’s financial sanctions regime.</TextBlock>
                <TextBlock marginBottom={10}><Bold>Choice of Law.</Bold> This Agreement, and its application and interpretation, shall be governed exclusively by the laws of the Philippines, without regard to its conflict of law rules.</TextBlock>

                <Bold paddingHorizontal={20} marginTop={20} marginBottom={10}>Effective:</Bold>
                <Text paddingHorizontal={20}>10 August 2023</Text>

                <Stack height={60} />
            </ScrollView>
        </View>
    </DrawerScreen>

}

export default TermsAndPrivacyScreen;