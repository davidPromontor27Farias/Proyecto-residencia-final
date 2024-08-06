import { Navigate, Route, Routes } from 'react-router-dom'
import { HomeApp } from '../pages/HomeApp'
import { CaracteristicaAsignatura } from '../pages/CaracteristicaAsignatura'
import { IntencionDidactica } from '../pages/IntencionDidactica'
import { CompetenciaAsignatura } from '../pages/CompetenciaAsignatura'
import { TemasDesarrollar } from '../pages/TemasDesarrollar'
import { ActividadesDeAprendizajeDeseadas } from '../pages/ActividadesDeAprendizajeDeseadas'
import { MiJournal } from '../pages/MiJournal'
import { TeachingActivities } from '../pages/TeachingActivities'
import { GenericCompetencies } from '../pages/GenericCompetencies'
import { SectionHours } from '../pages/SectionHours'


export const AppRoutes = () => {


  return (
    <Routes>
      <Route path="/" element={<HomeApp/>} />
      <Route path="caracteristicas-de-la-asignatura" element={<CaracteristicaAsignatura/>}/>
      <Route path="intencion-didactica" element={<IntencionDidactica/>}/>
      <Route path="competencia-de-la-asignatura" element={<CompetenciaAsignatura/>}/>
      <Route path="temas-y-subtemas-a-desarrollar"  element={<TemasDesarrollar/>}/>
      <Route path="actividades-de-aprendizaje-deseadas"  element={<ActividadesDeAprendizajeDeseadas/>}/>
      <Route path="actividades-de-ensenanza" element={<TeachingActivities/>} />
      <Route path="deserrallo-de-competencias-genericas"  element={<GenericCompetencies/>}/>
      <Route path='mi-journal' element={<MiJournal/>}/> 
      <Route path="asignar-horas" element={<SectionHours/>}/>
      <Route path="/*"  element={<Navigate to="/"/>}/>             
    </Routes>
  )
}

