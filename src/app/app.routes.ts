import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { AboutComponent } from './pages/about/about.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CareerComponent } from './pages/career/career.component';
import { BlogComponent } from './pages/blog/blog.component';
import { RefundPolicyComponent } from './pages/refund-policy/refund-policy.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SchoolFeesComponent } from './pages/school-fees/school-fees.component';
import { PaymentGatewayComponent } from './pages/payment-gateway/payment-gateway.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { PublicLayoutComponent } from './components/public-layout/public-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'cart', component: CartComponent },
      { path: 'about', component: AboutComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'career', component: CareerComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'refund-policy', component: RefundPolicyComponent },
      { path: 'terms-conditions', component: TermsConditionsComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'school-fees', component: SchoolFeesComponent }
    ]
  },
  {
    path: 'v1',
    component: PublicLayoutComponent,
    children: [
      { path: 'payment-gateway', component: PaymentGatewayComponent }
    ]
  },
  { path: '**', redirectTo: 'home' }
];
