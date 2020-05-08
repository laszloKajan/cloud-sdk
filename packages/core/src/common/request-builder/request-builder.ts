/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */

import { Constructable } from '../constructable';
import { EntityBase, EntityIdentifiable } from '../entity';

type EntityBasedRequestBuilder<
  EntityCT extends Constructable<EntityBase>
> = ReturnType<EntityCT['requestBuilder']>;

/**
 * @hidden
 */
export abstract class RequestBuilder<EntityT extends EntityBase>
  implements EntityIdentifiable<EntityT> {
  static forEntity<EntityCT extends Constructable<EntityBase>>(
    entity: EntityCT
  ): EntityBasedRequestBuilder<EntityCT> {
    return entity.requestBuilder() as EntityBasedRequestBuilder<EntityCT>;
  }

  _entity: EntityT;
  _entityConstructor: Constructable<EntityT>;
}
