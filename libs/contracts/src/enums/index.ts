import { registerEnumType } from 'type-graphql';
import { AppRole, InvitationStatus } from './tenant.enum';
import { ServiceTypes } from './auth.enum';
import { RoleActions } from './roles.enum';

export {
  AppRole,
  InvitationStatus,
  ServiceTypes,
};

registerEnumType(AppRole, {
  name: 'AppRole',
  description: 'The App roles for authorization',
});

registerEnumType(InvitationStatus, {
  name: 'InvitationStatus',
  description: 'The tenant member invitation status',
});

registerEnumType(ServiceTypes, {
  name: 'ServiceTypes',
  description: 'Authentication service types',
});

registerEnumType(RoleActions, {
  name: 'RoleAction',
  description: 'Role acgtion enum types',
});