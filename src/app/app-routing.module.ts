import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MariposaAuthGuardService } from './mariposa-auth-guard.service';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/admin-sign-in',
    pathMatch: 'full'
  },
  {
    path: 'admin-sign-in',
    //canActivate: [MariposaAuthGuardService],
    loadChildren: () => import('./pages/onboarding/admin-sign-in/admin-sign-in.module').then( m => m.AdminSignInPageModule)
  },

  {
    path: 'forgotpassword',
    loadChildren: () => import('./pages/onboarding/forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'resetpassword',
    loadChildren: () => import('./pages/onboarding/resetpassword/resetpassword.module').then( m => m.ResetpasswordPageModule)
  },
  {
    path: 'resetpasswordemail',
    loadChildren: () => import('./pages/onboarding/resetcheckmail/resetcheckmail.module').then( m => m.ResetcheckmailPageModule)
  },
  {
    path: 'forgotpasswordcompleted',
    loadChildren: () => import('./pages/onboarding/forgotpasswordcompleted/forgotpasswordcompleted.module').then( m => m.ResetpasswordcompletedPageModule)
  },
  {
    path: 'resetcheckmail',
    loadChildren: () => import('./pages/onboarding/resetcheckmail/resetcheckmail.module').then( m => m.ResetcheckmailPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./pages/onboarding/otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'invitation',
    loadChildren: () => import('./pages/onboarding/invitation/invitation.module').then( m => m.InvitationPageModule)
  },
  {
    path: 'carecircle',
    //canActivate: [MariposaAuthGuardService],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/creatingcare/createcarecircle/createcarecircle.module').then( m => m.CreatecarecirclePageModule),
        pathMatch: 'full'
      },
      {
        path: 'list', // done
        loadChildren: () => import('./pages/creatingcare/carecircle/carecircle.module').then( m => m.CarecirclePageModule)
      },
      {
        path: 'addSenior', // done
        loadChildren: () => import('./pages/creatingcare/carecircleaddsenior/carecircleaddsenior.module').then( m => m.CarecircleaddseniorPageModule)
      },
      {
        path: 'addmembers', // done
        loadChildren: () => import('./pages/creatingcare/addmembers/addmembers.module').then( m => m.AddmembersPageModule)
      },
      {
        path: 'showcarecircle', // out of scope
        loadChildren: () => import('./pages/creatingcare/showcarecircle/showcarecircle.module').then( m => m.ShowcarecirclePageModule)
      },
      {
        path: 'editmember',
        loadChildren: () => import('./pages/creatingcare/editmember/editmember.module').then( m => m.EditmemberPageModule)
      },
      {
        path: 'editmemberdetails',
        loadChildren: () => import('./pages/creatingcare/editmemberdetails/editmemberdetails.module').then( m => m.EditmemberdetailsPageModule)
      },
      {
        path: 'renamecarecircle',
        loadChildren: () => import('./pages/creatingcare/renamecarecircle/renamecarecircle.module').then( m => m.RenamecarecirclePageModule)
      },
    ]
  },

 {
   path: 'assessment',
   //canActivate: [MariposaAuthGuardService],
    children: [
      {
        path: 'assessmentbar',
        loadChildren: () => import('./pages/assessment/assessmentbar/assessmentbar.module').then( m => m.AssessmentbarPageModule)
      },
      {
        path: '',
        loadChildren: () => import('./pages/assessment/careneeds/careneeds.module').then( m => m.CareneedsPageModule)
      },
      {
        path: 'personalinfo',
        loadChildren: () => import('./pages/assessment/personalinfo/personalinfo.module').then( m => m.PersonalinfoPageModule)
      },
      {
        path: 'medicalconditions',
        loadChildren: () => import('./pages/assessment/medicalconditions/medicalconditions.module').then( m => m.MedicalconditionsPageModule)
      },
      {
        path: 'meals',
        loadChildren: () => import('./pages/assessment/meals/meals.module').then( m => m.MealsPageModule)
      },
      {
        path: 'addmeal',
        loadChildren: () => import('./pages/assessment/addmeal/addmeal.module').then( m => m.AddmealPageModule)
      },
      {
        path: 'sleepassistance',
        loadChildren: () => import('./pages/assessment/sleepassistance/sleepassistance.module').then( m => m.SleepassistancePageModule)
      },
      {
        path: 'homeandsafety',
        loadChildren: () => import('./pages/assessment/homeandsafety/homeandsafety.module').then( m => m.HomeandsafetyPageModule)
      },
      {
        path: 'motivation',
        loadChildren: () => import('./pages/assessment/motivation/motivation.module').then( m => m.MotivationPageModule)
      },
      {
        path: 'assessmentcomplete',
        loadChildren: () => import('./pages/assessment/assessmentcomplete/assessmentcomplete.module').then( m => m.AssessmentcompletePageModule)
      },
      {
        path: 'previewassessment',
        loadChildren: () => import('./pages/assessment/previewassessment/previewassessment.module').then( m => m.PreviewassessmentPageModule)
      },
      {
        path: 'companionship',
        loadChildren: () => import('./pages/assessment/companionship/companionship.module').then( m => m.CompanionshipPageModule)
      },
      {
        path: 'exercise',
        loadChildren: () => import('./pages/assessment/exercise/exercise.module').then( m => m.ExercisePageModule)
      },
      {
        path: 'homerepair',
        loadChildren: () => import('./pages/assessment/homerepair/homerepair.module').then( m => m.HomerepairPageModule)
      },
      {
        path: 'mobility',
        loadChildren: () => import('./pages/assessment/mobility/mobility.module').then( m => m.MobilityPageModule)
      },
      {
        path: 'bathing',
        loadChildren: () => import('./pages/assessment/bathing/bathing.module').then( m => m.BathingPageModule)
      },
      {
        path: 'grooming',
        loadChildren: () => import('./pages/assessment/grooming/grooming.module').then( m => m.GroomingPageModule)
      },
      {
        path: 'woundcare',
        loadChildren: () => import('./pages/assessment/woundcare/woundcare.module').then( m => m.WoundcarePageModule)
      },
      {
        path: 'useofelectronics',
        loadChildren: () => import('./pages/assessment/useofelectronics/useofelectronics.module').then( m => m.UseofelectronicsPageModule)
      },
      {
        path: 'driving',
        loadChildren: () => import('./pages/assessment/driving/driving.module').then( m => m.DrivingPageModule)
      },
      {
        path: 'eating',
        loadChildren: () => import('./pages/assessment/eating/eating.module').then( m => m.EatingPageModule)
      },
      {
        path: 'toileting',
        loadChildren: () => import('./pages/assessment/toileting/toileting.module').then( m => m.ToiletingPageModule)
      },
      {
        path: 'managingfinances',
        loadChildren: () => import('./pages/assessment/managingfinances/managingfinances.module').then( m => m.ManagingfinancesPageModule)
      },
      {
        path: 'checkvitals',
        loadChildren: () => import('./pages/assessment/checkvitals/checkvitals.module').then( m => m.CheckvitalsPageModule)
      },
      {
        path: 'gardening',
        loadChildren: () => import('./pages/assessment/gardening/gardening.module').then( m => m.GardeningPageModule)
      },
      {
        path: 'housework',
        loadChildren: () => import('./pages/assessment/housework/housework.module').then( m => m.HouseworkPageModule)
      },
      {
        path: 'laundry',
        loadChildren: () => import('./pages/assessment/laundry/laundry.module').then( m => m.LaundryPageModule)
      },
      {
        path: 'dressing',
        loadChildren: () => import('./pages/assessment/dressing/dressing.module').then( m => m.DressingPageModule)
      },
      {
        path: 'oralcare',
        loadChildren: () => import('./pages/assessment/oralcare/oralcare.module').then( m => m.OralcarePageModule)
      },
      {
        path: 'addshoppinglist',
        loadChildren: () => import('./pages/assessment/addshoppinglist/addshoppinglist.module').then( m => m.AddshoppinglistPageModule)
      },
      {
        path: 'viewshoppinglist',
        loadChildren: () => import('./pages/assessment/viewshoppinglist/viewshoppinglist.module').then( m => m.ViewshoppinglistPageModule)
      },
      {
        path: 'medication',
        loadChildren: () => import('./pages/assessment/medication/medication.module').then( m => m.MedicationPageModule)
      },
      {
        path: 'addmeal',
        loadChildren: () => import('./pages/assessment/addmeal/addmeal.module').then( m => m.AddmealPageModule)
      },
      {
        path: 'addallergy',
        loadChildren: () => import('./pages/assessment/addallergy/addallergy.module').then( m => m.AddallergyPageModule)
      },
      {
        path: 'addoutfit',
        loadChildren: () => import('./pages/assessment/addoutfit/addoutfit.module').then( m => m.AddoutfitPageModule)
      },

    ]
  },

  {
    path : 'configcare',
    //canActivate: [MariposaAuthGuardService],
    children : [
      {
        path: 'medication',
        loadChildren: () => import('./pages/configcare/medication/medication.module').then( m => m.MedicationPageModule)
      },
      {
        path: 'schedulemeals',
        loadChildren: () => import('./pages/configcare/schedulemeals/schedulemeals.module').then( m => m.SchedulemealsPageModule)
      },
      {
        path: 'bathing',
        loadChildren: () => import('./pages/configcare/bathing/bathing.module').then( m => m.BathingPageModule)
      },
      {
        path: 'addmedicine',
        loadChildren: () => import('./pages/configcare/addmedicine/addmedicine.module').then( m => m.AddmedicinePageModule)
      },
      {
        path: 'deletemedicine',
        loadChildren: () => import('./pages/configcare/deletemedicine/deletemedicine.module').then( m => m.DeletemedicinePageModule)
      },
      {
        path: 'deletemeals',
        loadChildren: () => import('./pages/configcare/deletemeals/deletemeals.module').then( m => m.DeletemealsPageModule)
      },
      {
        path: 'schedulebeauty',
        loadChildren: () => import('./pages/configcare/schedulebeauty/schedulebeauty.module').then( m => m.SchedulebeautyPageModule)
      },
      {
        path: 'deletebeauty',
        loadChildren: () => import('./pages/configcare/deletebeauty/deletebeauty.module').then( m => m.DeletebeautyPageModule)
      },
      {
        path: 'schedulevitals',
        loadChildren: () => import('./pages/configcare/schedulevitals/schedulevitals.module').then( m => m.SchedulevitalsPageModule)
      },
      {
        path: 'deletevitals',
        loadChildren: () => import('./pages/configcare/deletevitals/deletevitals.module').then( m => m.DeletevitalsPageModule)
      },
      {
        path: 'scheduleexercise',
        loadChildren: () => import('./pages/configcare/schedule-exercise/schedule-exercise.module').then( m => m.ScheduleExercisePageModule)
      },
      {
        path: 'deleteexercise',
        loadChildren: () => import('./pages/configcare/delete-exercise/delete-exercise.module').then( m => m.DeleteExercisePageModule)
      },
      {
        path: 'configcarecompleted',
        loadChildren: () => import('./pages/configcare/configcarecompleted/configcarecompleted.module').then( m => m.ConfigcarecompletedPageModule)
      },
      {
        path: 'assignshoppinglist',
        loadChildren: () => import('./pages/configcare/assignshoppinglist/assignshoppinglist.module').then( m => m.AssignshoppinglistPageModule)
      },
      {
        path: 'addmeals',
        loadChildren: () => import('./pages/configcare/addmeals/addmeals.module').then( m => m.AddmealsPageModule)
      },
      {
        path: 'addbeauty',
        loadChildren: () => import('./pages/configcare/addbeauty/addbeauty.module').then( m => m.AddbeautyPageModule)
      },
      {
        path: 'addvitals',
        loadChildren: () => import('./pages/configcare/addvitals/addvitals.module').then( m => m.AddvitalsPageModule)
      },
      {
        path: 'addexercise',
        loadChildren: () => import('./pages/configcare/addexercise/addexercise.module').then( m => m.AddexercisePageModule)
      },
      {
        path: 'addothertasks',
        loadChildren: () => import('./pages/configcare/addothertasks/addothertasks.module').then( m => m.AddothertasksPageModule)
      },
      {
        path: 'configurecarebar',
        loadChildren: () => import('./pages/configcare/configurecarebar/configurecarebar.module').then( m => m.ConfigurecarebarPageModule)
      },
      {
        path: 'calenderview',
        loadChildren: () => import('./pages/configcare/calenderview/calenderview.module').then( m => m.CalenderviewPageModule)
      },
    ]
  },
  {
    path: 'bookvitals',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/bookvitals/tabs/tabs.module').then( m => m.TabsPageModule),
      },
      {
        path: 'bookdetailedview',
        loadChildren: () => import('./pages/bookvitals/bookdetailedview/bookdetailedview.module').then( m => m.BookdetailedviewPageModule)
      },
      {
        path: 'bloodpressuredetailedview',
        loadChildren: () => import('./pages/bookvitals/bloodpressuredetailedview/bloodpressuredetailedview.module').then( m => m.BloodpressuredetailedviewPageModule)
      },
      {
        path: 'bathingdetails',
        loadChildren: () => import('./pages/bookvitals/bathingdetails/bathingdetails.module').then( m => m.BathingdetailsPageModule)
      },
      {
        path: 'updateschedule',
        loadChildren: () => import('./pages/bookvitals/updateschedule/updateschedule.module').then( m => m.UpdateschedulePageModule)
      },
      {
        path: 'editbathing',
        loadChildren: () => import('./pages/bookvitals/editbathing/editbathing.module').then( m => m.EditbathingPageModule)
      },
      {
        path: 'addpost',
        loadChildren: () => import('./pages/bookvitals/addpost/addpost.module').then( m => m.AddpostPageModule)
      },
      {
        path: 'addbloodpressure',
        loadChildren: () => import('./pages/bookvitals/addbloodpressure/addbloodpressure.module').then( m => m.AddbloodpressurePageModule)
      },
      {
        path: 'addappointment',
        loadChildren: () => import('./pages/bookvitals/addappointment/addappointment.module').then( m => m.AddappointmentPageModule)
      },
      
      
    ],
  },
  {
    path: 'menu',
    children: [
      {
        path: 'medication',
        loadChildren: () => import('./pages/hamburgermenu/medication/medication.module').then( m => m.MedicationPageModule)
      },
      {
        path: '',
        loadChildren: () => import('./pages/hamburgermenu/menu/menu.module').then( m => m.MenuPageModule)
      },
      {
        path: 'carecircleimages',
        loadChildren: () => import('./pages/hamburgermenu/carecircleimages/carecircleimages.module').then( m => m.CarecircleimagesPageModule)
      },
      {
        path: 'listofmembers',
        loadChildren: () => import('./pages/hamburgermenu/listofmembers/listofmembers.module').then( m => m.ListofmembersPageModule)
      },
      {
        path: 'faq',
        loadChildren: () => import('./pages/hamburgermenu/faq/faq.module').then( m => m.FaqPageModule)
      },
      {
        path: 'privacypolicy',
        loadChildren: () => import('./pages/hamburgermenu/privacypolicy/privacypolicy.module').then( m => m.PrivacypolicyPageModule)
      },
      {
        path: 'notificationsettings',
        loadChildren: () => import('./pages/hamburgermenu/notificationsettings/notificationsettings.module').then( m => m.NotificationsettingsPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./pages/hamburgermenu/notifications/notifications.module').then( m => m.NotificationsPageModule)
      },
      {
        path: 'editmembers',
        loadChildren: () => import('./pages/hamburgermenu/editmembers/editmembers.module').then( m => m.EditmembersPageModule)
      },
      {
        path: 'seniorprofile',
        loadChildren: () => import('./pages/hamburgermenu/seniorprofile/seniorprofile.module').then( m => m.SeniorprofilePageModule)
      },
      {
        path: 'caregiverprofile',
        loadChildren: () => import('./pages/hamburgermenu/caregiverprofile/caregiverprofile.module').then( m => m.CaregiverprofilePageModule)
      },
      {
        path: 'adminprofile',
        loadChildren: () => import('./pages/hamburgermenu/adminprofile/adminprofile.module').then( m => m.AdminprofilePageModule)
      },

    ],
  },
  {
    path: 'add',
    children: [
      {
        path: 'invitationsend',
        loadChildren: () => import('./pages/addmembers/invitationsend/invitationsend.module').then( m => m.InvitationsendPageModule)
      },
      {
        path: 'addmembers',
        loadChildren: () => import('./pages/addmembers/addmembers/addmembers.module').then( m => m.AddmembersPageModule)
      },
    ]
  },
  {
    path: 'schedulegardening',
    loadChildren: () => import('./pages/configcare/schedulegardening/schedulegardening.module').then( m => m.SchedulegardeningPageModule)
  },
  {
    path: 'schedulehousework',
    loadChildren: () => import('./pages/configcare/schedulehousework/schedulehousework.module').then( m => m.SchedulehouseworkPageModule)
  },
  {
    path: 'schedulelaundry',
    loadChildren: () => import('./pages/configcare/schedulelaundry/schedulelaundry.module').then( m => m.SchedulelaundryPageModule)
  },
  {
    path: 'scheduledressing',
    loadChildren: () => import('./pages/configcare/scheduledressing/scheduledressing.module').then( m => m.ScheduledressingPageModule)
  },
  {
    path: 'schedulewoundcare',
    loadChildren: () => import('./pages/configcare/schedulewoundcare/schedulewoundcare.module').then( m => m.SchedulewoundcarePageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/bookvitals/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'senioraddvitals',
    loadChildren: () => import('./pages/bookvitals/senioraddvitals/senioraddvitals.module').then( m => m.SenioraddvitalsPageModule)
  },
  {
    path: 'comments',
    loadChildren: () => import('./pages/bookvitals/comments/comments.module').then( m => m.CommentsPageModule)
  },
  
  
  
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
