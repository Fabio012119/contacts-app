import { fetchUsers } from '../helpers/Main';

describe('fetchUsers integration test', () => {
    const setUsersMock = jest.fn();
    const setErrorMock = jest.fn();
  
    beforeEach(() => {
      jest.clearAllMocks();
    });
  
    test('fetches real data from API and sets users', async () => {
      await fetchUsers({ setUsers: setUsersMock, setError: setErrorMock });
  
      expect(setUsersMock).toHaveBeenCalled();
      expect(setUsersMock.mock.calls[0][0].length).toBeGreaterThan(0);
      expect(setErrorMock).not.toHaveBeenCalled();
    });
  
    test('handles failed fetch requests', async () => {
      // Simulate a failure by temporarily changing the fetch URL
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false, // Simulate a failed response
      });
  
      await fetchUsers({ setUsers: setUsersMock, setError: setErrorMock });
  
      expect(setUsersMock).not.toHaveBeenCalled();
      expect(setErrorMock).toHaveBeenCalledWith('Failed to fetch users');
    });
  });
