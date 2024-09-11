import { CardSpotlight } from "../acertenity/card-spotlight";

export default function Pricing() {
  return (
    <div id="Pricing" className="mt-8 flex justify-center items-center gap-4 flex-wrap">
      <a href="/free">
        <CardSpotlight className="h-96 w-96">
          <h3 className="text-2xl font-semibold mb-2">Try It For Free</h3>
          <p className=" mb-4">This package includes:</p>
          <ul className="list-disc list-inside  mb-4">
            <li>1,000 Predictions / month</li>
            <li>Share with API</li>
            <li>1 Week Log Retention</li>
          </ul>
          <p className="font-bold text-xl mb-4">Free <span className="text-sm text-gray-300">for a month</span></p>
          <a href="#" className="mt-4 border-2 inline-block  hover:/80 p-2 rounded-lg z-50">Click To Try</a>
        </CardSpotlight>
      </a>
      <CardSpotlight className="h-96 w-96">
        <h3 className="text-2xl font-semibold mb-2">Individual Plan</h3>
        <p className=" mb-4">This package includes:</p>
        <ul className="list-disc list-inside  mb-4">
          <li>10,000 Predictions / month</li>
          <li>1GB Storage</li>
          <li>Costumise LLMs</li>
          <li>Database Backup</li>
          <li>1 Week Log Retention</li>
          <li>Custom Chatbot Branding</li>
        </ul>
        <p className="font-bold text-xl mb-4">Rp.59.000,00<span className="text-sm text-gray-300">/month</span></p>
        <a href="#" className="mt-4 border-2 inline-block  hover:/80 p-2 rounded-lg z-50">Click To Buy</a>
      </CardSpotlight>
      <CardSpotlight className="h-96 w-96">
        <h3 className="text-2xl font-semibold mb-2">Team Plan</h3>
        <p className=" mb-4">This package includes:</p>
        <ul className="list-disc list-inside  mb-4">
          <li>Everything in Starter</li>
          <li>50,000 Predictions / month</li>
          <li>10GB Storage</li>
          <li>Priority Support</li>
          <li>Admin Roles & Permissions</li>
        </ul>
        <p className="font-bold text-xl mb-4">Rp.179.000,00<span className="text-sm text-gray-300">/month</span></p>
        <a href="#" className="mt-4 border-2 inline-block  hover:/80 p-2 rounded-lg ">Click To Buy</a>
      </CardSpotlight>
      <CardSpotlight className="h-96 w-96">
        <h3 className="text-2xl font-semibold mb-2">Enterprise Plan</h3>
        <p className=" mb-4">For Large Organizations:</p>
        <ul className="list-disc list-inside  mb-4">
          <li>On-Premise Deployment</li>
          <li>Air-gapped Environments</li>
          <li>SSO & SAML</li>
          <li>LDAP & RBAC</li>
          <li>Audit LogsL</li>
          <li>99.99% Uptime SLA</li>
        </ul>
        {/* <p className="font-bold text-xl mb-4">Contact Us</p> */}
        <a href="#" className="mt-4 border-2 inline-block  hover:/80 p-2 rounded-lg ">Contact Us</a>
      </CardSpotlight>
    </div>
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};
