import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../src/auth';
import { Navbar } from '../../../src/ui/components/Navbar';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en el <Navbar />', () => {
  const contexValue = {
    logged: true,
    user: {
      name: 'Carlos',
      id: 'ABC',
    },
    logout: jest.fn(),
  };
  beforeEach(() => jest.clearAllMocks());
  test('debe de mostrar el nombre del usuario', () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contexValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    // screen.debug();

    expect(screen.getByText('Carlos')).toBeTruthy();
  });

  test('debe de llamar logout y navigate cuando se hace click en el boton', () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contexValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const logoutBtn = screen.getByRole('button');
    fireEvent.click(logoutBtn);
    expect(contexValue.logout).toHaveBeenCalled();

    expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true });
  });
});

