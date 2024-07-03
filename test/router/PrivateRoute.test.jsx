import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { PrivateRoute } from '../../src/router/PrivateRoute';
import { MemoryRouter, Navigate, Route, Routes } from 'react-router-dom';

describe('Pruebas en el <PrivateRoute />', () => {
  test('debe de mostrar el children si esta autenticado', () => {

    Storage.prototype.setItem = jest.fn();


    const contextValue = {
      logged: true,
      user: {
        name: 'Carlos',
        id: 'ABC',
      },
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <PrivateRoute>
            <h1>Ruta Privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText('Ruta Privada')).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
    // screen.debug();
  });

  test('debe de navegar si no esta autenticado', () => {
    const contextValue = {
      logged: false,
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <Routes>
            <Route
              path='marvel'
              element={
                <PrivateRoute>
                  <h1>Ruta Privada</h1>
                </PrivateRoute>
              }
            />
            <Route path='/login' element={<h1>Página de Login</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText('Página de Login')).toBeTruthy();
    // screen.debug();
  });
});
