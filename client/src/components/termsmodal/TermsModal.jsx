import React, { useEffect } from "react";

const TermsModal = ({ isOpen, onAccept, onClose }) => {
  const handleAccept = () => {
    onAccept();
  };

  const handleClose = (event) => {
    if (event) event.stopPropagation();
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      const modal = document.querySelector(".terms-modal-content");
      if (!modal) {
        console.error("Modal element not found in the DOM");
        return;
      }
      const focusableElementsString =
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const focusableElements = modal.querySelectorAll(focusableElementsString);
      if (focusableElements.length === 0) {
        console.error("No focusable elements found inside the modal");
        return;
      }
      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement =
        focusableElements[focusableElements.length - 1];

      const handleKeydown = (e) => {
        switch (e.key) {
          case "Tab":
            if (
              e.shiftKey &&
              document.activeElement === firstFocusableElement
            ) {
              lastFocusableElement.focus();
              e.preventDefault();
            } else if (
              !e.shiftKey &&
              document.activeElement === lastFocusableElement
            ) {
              firstFocusableElement.focus();
              e.preventDefault();
            }
            break;
          case "Escape":
            onClose();
            break;
          default:
            break;
        }
      };

      document.addEventListener("keydown", handleKeydown);
      firstFocusableElement.focus();

      return () => {
        document.removeEventListener("keydown", handleKeydown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50" style={{ zIndex: 2000 }}>
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div className="relative mt-4 bg-gray-400 p-6 rounded-lg shadow-lg overflow-auto max-h-2/4 w-2/4 m-auto small-text">
        <h2 className="text-xl text-center text-gray-800 font-bold mb-4">
          Terms and Conditions
        </h2>
        <ol className="text-gray-700 list-decimal list-outside ml-12 space-y-4">
          <li>
            <strong>Acceptance of Terms:</strong> By accessing and using the
            Bamvsthewrld application, you agree to be bound by these Terms and
            Conditions ("Terms"). If you do not agree to these Terms, you must
            not use the application.
          </li>
          <li>
            <strong>Google Login:</strong> Users may access Bamvsthewrld through
            Google Sign-In. By logging in this way, you authorize us to access
            certain Google account information, as per Google's Terms and
            Privacy Policy.
          </li>
          <li>
            <strong>Use of Service:</strong> Bamvsthewrld is provided for
            personal, non-commercial use only. You agree to use the application
            only for lawful purposes and in a way that does not infringe the
            rights of, restrict, or inhibit anyone else's use and enjoyment of
            Bamvsthewrld.
          </li>
          <li>
            <strong>Prohibited Conduct:</strong> You agree not to engage in any
            of the following prohibited activities:
            <ul className="list-disc list-inside pl-4 mt-2 space-y-2">
              <li>The submission of false information or impersonation.</li>
              <li>Posting inappropriate, offensive, or harmful content.</li>
              <li>
                Unauthorized copying, distribution, or use of any content,
                especially copyrighted materials.
              </li>
              <li>
                Any form of harassment or actions that infringe on the privacy
                or rights of others.
              </li>
            </ul>
          </li>
          <li>
            <strong>Intellectual Property:</strong> All intellectual property
            rights in the application and its content belong to Bamvsthewrld or
            its licensors. You may not use any content from the application
            without express permission.
          </li>
          <li>
            <strong>Content Responsibility:</strong> The application may display
            content that does not belong to Bamvsthewrld. Such content is the
            sole responsibility of the entity that makes it available. We
            reserve the right to review and remove any content at our
            discretion.
          </li>
          <li>
            <strong>Modifications to Terms:</strong> We reserve the right to
            modify these Terms at any time. Your continued use of Bamvsthewrld
            following any such changes constitutes your acceptance of the new
            Terms.
          </li>
          <li>
            <strong>Limitation of Liability:</strong> To the fullest extent
            permitted by law, Bamvsthewrld shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages, or any loss
            of profits or revenues.
          </li>
          <li>
            <strong>Governing Law:</strong> These Terms are governed by the laws
            of the jurisdiction in which Bamvsthewrld operates.
          </li>
          <li>
            <strong>Contact Us:</strong> For any questions about these Terms,
            please contact us at tishd7@hotmail.com.
          </li>
        </ol>
        <div className="mt-4 flex justify-end">
          <button
            className="bg-[#6e43ef] hover:bg-[#ac94f4] text-white font-bold py-2 px-4 rounded mr-2"
            onClick={handleAccept}
          >
            I Accept
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
