export const Toast = ({ message }: { message: string }) => (
    <div className="fixed bottom-4 right-4 bg-red-500 text-white p-3 rounded-md shadow-lg">
      {message}
    </div>
);